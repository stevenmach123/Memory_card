import { Component ,ElementRef,HostListener,ViewChild,Renderer2,ChangeDetectorRef, TemplateRef} from '@angular/core';
import { IonItemSliding ,ModalController,PopoverController } from '@ionic/angular';
import { trigger,state,style,animate,transition, keyframes} from '@angular/animations';


import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import {myservice,myservice2} from "../myservice"
import {Dashes,dash, myadd_attr, myadd_topic,myadd_whole,group_choose ,box,wood, FileHandle, check_attr,the_pos,skill_attrs,bullet} from "../classes"
import { map, filter, tap,switchMap,mergeMap, take } from 'rxjs/operators' ;
import {ActivatedRoute,Router} from "@angular/router"
import {FormControl, FormGroup, FormBuilder,Validators, FormArray, MinLengthValidator, ValidationErrors, AbstractControl, AsyncValidatorFn, ControlContainer, ValidatorFn} from '@angular/forms';
import { Modal1Component } from '../modal1/modal1.component';
import {PopUpComponent} from "../pop-up/pop-up.component"
import { Button } from 'ionic-angular';
interface bun{
  collapsed:boolean;
  width:number;
}

interface w{
  price:number,
  food:string
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  host:{
    '(document:click)': 'outClick($event)'
    
  },
  
  animations:[
    trigger('red_rotate',[
        state('initial',style({transform:'rotate(0deg)'})),
        state('end',style({transform:'rotate(-90deg)'})),
      
        transition('initial <=>end',[ animate(400) ])
      



    ]),
    trigger('card_appear',[
        state('settle',style({opacity:'1'}) ),
      transition('settle => void', [animate(400,style({opacity:'0',transform:'translateY(10px)' })) ]  ),
      transition('void => settle', [ style({opacity:'0',transform:'translateY(-10px)' }),animate(400)  ] ),

       // transition('void => *', [animate(3000,style({transform:'translateX(-10px)'})) ,animate(1000,style({transform:'translateY(-10px)',color:'yellow'} )),animate(600)   ] )

      //transition('void => *', [animate(1000,style({transform:'translateY(20px)'})),animate(2000),animate(3000,style({transform:'translate(-20px,20px)',color:'pink'})) ,animate(1000,style({transform:'translateY(-10px)',color:'yellow'} )),animate(600)   ] )
          //transition('void => *', [animate(1000,style({transform:'translateY(20px)',color:'purple'})),animate(2000),animate(3000,style({color:'pink'})) ,animate(1000,style({transform:'translateY(-10px)',color:'yellow'} )),animate(600)   ] )
          //try the same but take out [animate(1000,style({transform:'translateY(20px)'

      //transition('void => *', [style({color:'orange'}),animate(1000),animate(1000,style({transform:'translateX(-20px)',color:'red'})),animate(3000) ,animate(1000,style({transform:'translate(-10px,-100px)',color:"pink"} )),animate(600)   ] )
          //transition('void => *', [style({color:'orange'}),animate(1000),animate(1000,style({color:'red'})),animate(3000) ,animate(1000,style({transform:'translate(-10px,-100px)',color:"pink"} )),animate(600)   ] )
          //transition('void => *', [style({color:'orange'}),animate(1000),style({color:'red'}),animate(3000) ,animate(1000,style({transform:'translate(-10px,-100px)',color:"pink"} )),animate(600)   ] )

          //transition('void => *', [style({color:'orange'}),animate(1000),style({transform:'translateX(-20px)',color:'red'}),animate(3000),animate(1000,style({transform:'translate(-10px,-100px)',color:"pink"} )), animate(600)   ] )
         //transition('void => *', [style({transform:'translateX(-20px)',color:'orange'}),animate(1000),animate(1000,style({color:'red'})),animate(3000) ,animate(1000,style({transform:'translate(-10px,-100px)',color:"pink"} )),animate(600)   ] )

    ]),
    trigger('sign_atr',[
            
        state('orange',style({})),   
        state('aqua',style({})),  
        transition('* <=> orange', [animate(600,style({backgroundColor:'orange'})),animate(600),animate(600,style({backgroundColor:'orange'})),animate(600),animate(600,style({backgroundColor:'orange'})),animate(600) ]   ) ,
        transition('* <=> aqua', [animate(600,style({backgroundColor:'aqua'})),animate(600),animate(600,style({backgroundColor:'aqua'})),animate(600),animate(600,style({backgroundColor:'aqua'})),animate(600) ]   )

    ]),
    trigger('nomatch',[
        state('init',style({opacity:'1',maxWidth:'10rem',maxHeight:'3rem'})),
        transition('void => init',[style({maxWidth:'3rem',maxHeight:'1rem',opacity:'0'}),animate(200)]),
        transition('init=>void',[animate(400,style({maxWidth:'3rem',maxHeight:'1rem',opacity:'0'}))    ])
    ])

  ]
  
  
})



@HostListener('window:resize', ['$event'])





export class HomePage  {
  @ViewChild("x") e:ElementRef;
  @ViewChild("we") we:ElementRef;
  @ViewChild("wecontent") wecontent:ElementRef;
  @ViewChild("ItemSliding",{static:true})ItemSlide:IonItemSliding 
  @ViewChild("sidenav") sidenav:ElementRef
  @ViewChild("fire") fire:ElementRef
  @ViewChild("popControl") popControl:PopoverController
  @ViewChild("add_player") add_player:PopoverController
  @ViewChild("nomatchbox") nomatchbox:ElementRef
  styleClass:string ='';

  mypipe:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  mycomb:Observable<dash[]>;
  mycomb3:Observable<dash[]>;
  lis = new Map<number,number>([[1,4],[4,3],[3,5]])
  the_box:box
  no_match:boolean=false;
  static getBullet(mybullet:bullet){
    mybullet.subBullet().subscribe(e=>{
       //console.log("home ",e)
    })
  } 

  constructor(private rd:Renderer2,private fb:FormBuilder,private ser:myservice, private route:ActivatedRoute,private router:Router,private cdr: ChangeDetectorRef,private modalCtrl: ModalController, private popCtrl:PopoverController   ) {
    
   // this.the_group.get("the_control").setAsyncValidators(this.valids())
    /* let mywood:wood ={} as wood
     console.log(mywood.age)
     console.log(this.the_box)
     this.the_box = new box(new box({age:31,name:"pink"}))  //constructor as interface wood
     this.the_box = {age:30,name:"we"} // constructor as class box
     this.the_box = new box({} as box) // not allow to write = {} as box / with constructor as Iwood
    
    
     let er =[...this.lis]
     console.log("ee",this.the_box)

     */
    

   
    
  }

   /* valids(){
    return (val: AbstractControl):Observable<ValidationErrors|null>=> {
        return of(this.words.some(e=>e===val.value))
        .pipe(
          map( (check:boolean) =>
            check ? {invalid:val.value}:null
        )
        )
       
    }
  }  */


  

  async presentModal(name:string) {
    const myModalService:BehaviorSubject<string> =  new BehaviorSubject<string>("no")
     let er = {name:name,attr1:this.skill_attr.get(name).attr1, attr2: this.skill_attr.get(name).attr2, type1:this.skill_attr.get(name).type1, type2:this.skill_attr.get(name).type2,img: this.skill_attr.get(name).img,check_attr:this.skill_attr.get(name).check_attr, bul:this.skill_attr.get(name).bul    }
     this.ser.minor_setting.next(er)
  

    const modal = await this.modalCtrl.create({
      component:Modal1Component,
      breakpoints:[0,0.75],
      initialBreakpoint: 0.75,
      canDismiss:true,
      backdropDismiss:true,
    
      cssClass:"custom_modal",
      
      
      
      componentProps: {
        "add_top":this.add_topic
      },  

    })
    await modal.present();


    
    modal.onDidDismiss().then((_ => {
        
    
      myModalService.unsubscribe();
    }));
  }




  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

  ngOnInit(){

 

    this.ser.transfer_from_setting.subscribe(val=>{
      this.skill_attr.set(val.name,{attr1:val.attr1,attr2:val.attr2,type1:val.type1,type2:val.type2,img:val.img,check_attr:val.check_attr,bul:val.bul })
      if(this.myadd.has(val.name) ){
          this.myadd.get(val.name).img = this.skill_attr.get(val.name).img
        
      }
    })
    
    
   this.route.data.subscribe(item=>{
        console.log("home ",item);
    })

    this.route.paramMap.pipe(
      map(param =>{
       // let we= Dashes.filter(e=> {return e.id != parseInt(param.get("id")) } ) 
       //console.log("home2", param.get("outlet"))
        console.log("why not me")
        this.mypipe.next(parseInt(param.get("id")))
      
        return 1;
      },
     
      )
   ).subscribe()

    this.mycomb3  = this.route.paramMap.pipe(
      map(param=>{
        let r:dash[] = []
        //console.log("param3 ",param.get("id"))
        if(parseInt(param.get("id"))){
         r.push(Dashes.find(val => parseInt(param.get("id"))== val.id))
        }
         return r
         
      })
    )

   this.mycomb =this.mypipe.pipe(
    map(x =>{
        let we= Dashes.find(e=> {return e.id == x } ) 
        return we;
    }),
    mergeMap((i)=>{
        let wr= Dashes.filter(item =>{ return item !=i  })
        
        return of(wr)
    })


  )

  //
  this.mycomb2 = this.ser.mysubject3.pipe(
    map(pa=>{
      let wr= pa.filter(item =>{ return item.id%2 ==0  })
      return wr
    })

  )

  let obj=  this.ser.mysubject3.pipe(
    switchMap(pa=>{
      let wr= pa.filter(item =>{ return item.id%2 ==0  })
      return of(wr);
    })

  ).subscribe(val => console.log("subject3  ",val) )
  

 // this.ser.newbullet.subBullet().subscribe(val=>{console.log("home ",val)})
  //------
   /* this.mybullet.subBullet().subscribe(e=>{
      console.log("home bullet ",e)
    })  */
    
    //---
    
   /* this.ser.newsubject.asObservable().subscribe(e=>{
    
      e.subBullet().pipe(take(1)).subscribe(r=>{  console.log("home bullet ",r)  })
    

    })  */
   /* this.ser.newsubject.asObservable().subscribe(e=>{
    
      e.pipe().subscribe(r=>{  console.log("home bullet ",r)  })
    })*/


    let  c=  Array.from(Array(10)).map((e,i)=>{return i+1})
    //c= Array.from(Array(10).keys()).map((i,x)=> i)
    //c = Array.apply(null,{length:10,0:'hi'})
    //c= Array.apply(null,{length:10}).map((e,i)=>i ) *

    //c= Array.apply(null,{length:10}).map(Number.call,Number,(i,x,v)=>i )
   // c= Array.apply(null,{length:10}).map(Number.call,(i,x,v)=>i )
   //c= Array.apply(null,Array(10)).map(Function.call,(i,x,v)=>x )
    console.log(c)
  
  
}


  ngAfterViewInit(){
    this.ser.behave.subscribe((val)=>{}
    // console.log("constructor behave ",val)
   )

   this.ser.obs.subscribe(e=>{
     this.ser.hello();
   });

   




   


  }


  

  screen(e:bun):string{

      console.log(e);
      if(e.collapsed){
        this.styleClass="big-screen";
      }
      else{
        this.styleClass="mid-screen";
      }
      console.log(this.styleClass);
      return this.styleClass;

  }
  username:string="";
  password:string="";
 

  //---
  search:string;
  add:string;
  add2:string;
  mysubject:Subject<dash[]> = new Subject()
    // new Subject<dash[]>()
  mysubject2: Observable<any>;
  constant =200;
  mycomb2:Observable<dash[]>;


  searchItem(e:any){
    console.log("/---/");
    console.log(e.value);
    this.router.navigate(["dashboard",{name:e.value}],{relativeTo:this.route})
  } 
  addItem(){
    //console.log("ss",this.add);
      this.ser.addDashItem(this.add);
  }
  
  addItem2(){
    
    let item:dash;
    item = {name:this.add2,id:this.constant++}
    // Dashes.push(item);
    
    this.copy_Dashes.push(item)
    this.mysubject.next(this.copy_Dashes)
    //this.mysubject.next([{id:1,name:"hi"}]);
    //----
  
    //way2
     /* Dashes.push(item)
      this.copy_Dashes  = [...Dashes]   // or this.copyDashes = Dashes cung dc 
      this.mysubject.next(this.copy_Dashes)  */
    //way 2.1 
      
     // Dashes.push(item)


    this.arr.push(this.constant_i++)
    this.arr_sub.next(this.arr)

     


  }
  oo(){
     let copy_Dashes = [...Dashes];
     this.router.navigate(["home","product"])
    
    
  }
  arr = [4,5,6]
  arr_sub:Subject<number[]> ;
  constant_i = 7
  copy_Dashes =  [...Dashes]
  transfer2(sub:any){
    this.arr_sub=sub as unknown as BehaviorSubject<number[]>
    //sub = this.arr_sub

    /*this.arr=sub
    sub.push(10)   */
  
  }
  transfer(sub:any){
    
    console.log("transfer");
      this.mysubject =sub//work, but sub = this.mysubject not work
        /*
          copy_Dashes = [...Dashes] 
        ---
        this.copy_Dashes.push(item)
        this.mysubject.next(this.copy_Dashes);

       
        //----
      
        */

    /* either direction this.mysubject <=> sub 
       
        Dashes.push(item);
        this.mysubject.next(Dashes);

         this.mysubject.next([{id:1,name:"hi"}]); // change to this ( this.mysubject  =sub;)
    */




    
    
   /* this.mysubject2 =this.mysubject.pipe(
      map(dashes => {   
        return "a"; 
      } ),
      switchMap((param)=>{return of(10,20,30,40)})

    )*/
  //this.mysubject2.subscribe(val=>console.log(val)) 
    

  }

/*
why(){
  console.log("in")
  this.small.controls['ad'].patchValue({ac:"alo"})
}  

small = new FormGroup({
    a : new FormControl(""),
    ad: this.fb.group ({
      ac: this.fb.control('')
    })
})  */


  //-----
  
  biginfo = new FormGroup({
  
    first : new FormControl(""),
    attribute : new FormControl(""),

    address: new FormGroup({
    
       ab: this.fb.array([])
      
    })

   
   // < FormGroup<{ biginfo2:FormGroup< {myname:FormControl,id:FormControl,skills:FormArray }> }>      >

  
  })
  mygroup = new FormGroup({
      hello: new FormControl("",[Validators.required])
  })
 


cardGroup = this.fb.array<FormControl>([])

group_choose(card_group:FormControl,i:number){
  let name:string = this.names[i]
  let prev_group:string;

  if(this.myadd.has(name)){
    prev_group = this.myadd.get(name).group
    if(typeof( card_group.value) =='string' ){

        this.myadd.get(name).group  = card_group.value ;
    }else{
      this.myadd.get(name).group = (<group_choose>card_group.value).group_name
    }
    this.appear_group_sidenav("",prev_group,"delete")
    this.appear_group_sidenav(name,"","add")

  }
    
}



firstName:string;
attribute:string;
names:string[] =[]   
add_topic = new Map<string,myadd_topic>()
founds:string[]=[];
 getAB(){
   return <FormArray>this.biginfo.get("address").get("ab");
 }
getSkills(i:number){
  return this.getAB().at(i).get("skills") as FormArray;
}

 onsubmit(){
    console.log("bigform");
 
 }
 onsubmit2(theform2:any,i:number){
    console.log("in submit2")
    
}
lv_submit(a:any){
  console.log("lv_submit ",a.value)
}


player():FormGroup{
 return this.fb.group({
  myname:[''],
  id:[""],

  skills:this.fb.array([]),
  
 
  })
}
skill():FormGroup{
  /*return this.fb.group({
    skill: ['we'],
    lv:['w']
  })  */

  return new FormGroup({
    
    skill: new FormControl("",[Validators.required,this.forbibString()]),
    lv:new FormControl("",[Validators.required,this.forbibNumber()]),
    
    context_skill:  new FormControl({value:"",disabled:true}),
    context_lv: new FormControl({value:"",disabled:true}),
    mycolor:new FormControl(""),
    myposition: new FormControl(""),
    mybullet:  new FormControl<number[]>([]), 
    dna:new FormControl(this.select_color),
    myorder: new FormControl("",[Validators.required,this.forbibBN]) 
    
  })
}

invalid_order =[
  {text:'required',message:'is empty'},
  {text:'format',message:'should in 1-'+myservice2.N}
]
initial_order(i:number):string{
  
  let val_text:number=0
  
  if( this.getSkills(i).controls.length==1){
      val_text= 1.
  
      return val_text.toString()
      
  }
  else{
    
    this.getSkills(i).controls.forEach((control:FormGroup,index)=>{
        let val_order ;
       
        if(control.controls.myorder.valid  &&  1<= Number(control.get('myorder').value) && Number(control.get('myorder').value) <=500  ){
            
            val_order  = parseInt(control.get('myorder').value)
        }
        else{ 
          val_order = 1
        }
        if(val_order > val_text){ val_text = val_order  }
        
    })
  }
  if(val_text <myservice2.N )
    val_text += 1 
  
  return val_text.toString()


}
 
forbibBN(context:AbstractControl):ValidationErrors{

  const reg = /^(?=.*[1-9])[0-9]{1,3}$/gm
  let val:string =context.value
  if(val.length> 0){
  if(val.match(reg)){
    
    return null
  }
  else{
     return {format:true}
  }
  }
  else{ return null}




}


forbibNumber(){
  return (val: AbstractControl):null|ValidationErrors =>{
      //console.log("fobString ",val.value)
      let idea =""
      if(Number(val.value.trim())){
      
        return null;
      }
      else{
        if(val.value.length==0){
          idea= "is empty"
        }
        else if(!Number(val.value.trim())){
          idea ="not number"
        }


        return {forbib:idea}
      }
  } 
}

forbibString(){
  
  return (val:AbstractControl):null|ValidationErrors =>{
    //console.log("fobNumber ",val.value)
    let idea:string =""
    if(!Number(val.value.trim()) && val.value.length>0  && !this.blank(val.value) ){
      
      return null;
    }
    else{
     
      if(val.value.length==0 || this.blank(val.value) ){
        idea = "is empty"
        
      }
      else if(Number(val.value.trim())){
        idea = "Words only(or with numbers)"
        
      }

      return {forbib:idea}
    }



  }
}







form1_select(a:any){

}
skill_attr = new Map<string,{attr1:string,attr2:string,type1:string, type2:string,img: FileHandle,check_attr:check_attr,bul:number[] }    >() 

addPlayer(){ 
  

  let a = this.firstName;

  
  if(!this.names.find(e=>{return a==e}) && !this.blank(this.firstName) && !this.blank(this.attribute) ){
    this.names.push(a);
    this.add_topic.set(a,{des: this.attribute,star:1,color:''}) 

    this.getAB().push(this.player());
    this.cardGroup.push( new FormControl<{group_name:string,opened:boolean}|string>("",Validators.required)  )
    this.add_player.dismiss()
    setTimeout(e=>{
      
      this.skill_attr.set(a,{attr1:"Skill",attr2:"Lv",type1:"characters",type2:"numbers",img:new FileHandle(),check_attr:new check_attr(),bul:[0,1]})
      
      
      this.getAB().at(this.getAB().length-1).get("myname").setValue(this.firstName)
     
      },200)

  }
  

  
}

deletePlayer(i:number){
  let tar = this.names[i];
  let a = this.firstName +" "+this.attribute;
  this.getAB().removeAt(i)

  this.names =this.names.filter(e=>{return e != tar})
  this.add_topic.delete(tar)
  this.skill_attr.delete(tar)
  this.cardGroup.removeAt(i)

  if(this.myadd.has(tar)){
    let prev_group = this.myadd.get(tar).group
    this.myadd.delete(tar)
    this.appear_group_sidenav("",prev_group,'delete')
  }
  
 
}


deleteSkill(name:string,t_skill:any,t_lv:any,i:number){
  if( this.myadd.has(name)){
    this.myadd.get(name).my_list.delete(t_skill.value)
  
    
    let findDupSkill = this.formContainDupSkill(t_skill.value,i,true)
    if(findDupSkill.find){
      let mini_list: myadd_attr = {lv:findDupSkill.myadd_arr.lv   , mycolor:findDupSkill.myadd_arr.mycolor, attr1:findDupSkill.myadd_arr.attr1 , attr2:findDupSkill.myadd_arr.attr2 ,position:findDupSkill.myadd_arr.position, bul:findDupSkill.myadd_arr.bul,order: findDupSkill.myadd_arr.order   } 
      this.myadd.get(name).my_list.set(t_skill.value,mini_list)
    }
    this.ser.ob_myadd.next(name)

  }


}

addSkill_sub(i:number,the_name:string,check:string){
  let bullet1:number = this.skill_attr.get(the_name).bul[0];
  let bullet2:number = this.skill_attr.get(the_name).bul[1];

  if(check=='check1'){


    this.getSkills(i).at(this.getSkills(i).length -1).get("context_skill").setValue(this.skill_attr.get(the_name).attr1)
    if(this.skill_attr.get(the_name).type1 == "numbers" ){
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibNumber())
    }
    else{
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibString())
    }
    this.getSkills(i).at(this.getSkills(i).length-1).get("mybullet").setValue([bullet1,bullet2])

    this.getSkills(i).at(this.getSkills(i).length -1 ).get("context_lv").setValue("")
    this.getSkills(i).at(this.getSkills(i).length -1).get("lv").disable({onlySelf:true})

  }
  else if(check=='check2'){
    this.getSkills(i).at(this.getSkills(i).length -1).get("context_skill").setValue(this.skill_attr.get(the_name).attr2)
    if(this.skill_attr.get(the_name).type2 == "numbers" ){
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibNumber())
    }
    else{
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibString())
    }
    this.getSkills(i).at(this.getSkills(i).length-1).get("mybullet").setValue([bullet2,bullet1])

    this.getSkills(i).at(this.getSkills(i).length -1 ).get("context_lv").setValue("")
    this.getSkills(i).at(this.getSkills(i).length -1).get("lv").disable({onlySelf:true})

  }

}


addSkill(i:number){  
 this.getSkills(i).push(this.skill());


 setTimeout(e=>{
  this.getSkills(i).at(this.getSkills(i).length-1).get("mycolor").setValue(this.select_color) 
  this.getSkills(i).at(this.getSkills(i).length-1).get("myposition").setValue(this.specified_pos[0])
   let the_name = this.getAB().at(i).get("myname").value ;
  this.getSkills(i).at(this.getSkills(i).length-1).get("mybullet").setValue(this.skill_attr.get(the_name).bul)
  this.getSkills(i).at(this.getSkills(i).length-1).get("myorder").setValue(this.initial_order(i))
  
   
   this.getSkills(i).at(this.getSkills(i).length -1).get("lv").enable({onlySelf:true})
   

  if(this.skill_attr.get(the_name).check_attr.uncheck ){
      if(this.skill_attr.get(the_name).check_attr.uncheck_name =='check1' ){
        this.addSkill_sub(i,the_name,'check1')
      }
      else if(this.skill_attr.get(the_name).check_attr.uncheck_name =='check2'){
        this.addSkill_sub(i,the_name,'check2')
      }
  }
  else{

      this.getSkills(i).at(this.getSkills(i).length -1).get("context_skill").setValue(this.skill_attr.get(the_name).attr1)
      this.getSkills(i).at(this.getSkills(i).length -1 ).get("context_lv").setValue(this.skill_attr.get(the_name).attr2)


      
    
    if( this.skill_attr.get(the_name).type1 == "numbers" ){
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibNumber())

    }
    else{
      this.getSkills(i).at(this.getSkills(i).length -1).get("skill").setValidators(this.forbibString())

    }

    if( this.skill_attr.get(the_name).type2 == "numbers" ){
      this.getSkills(i).at(this.getSkills(i).length -1).get("lv").setValidators(this.forbibNumber())
    }
    else{
        this.getSkills(i).at(this.getSkills(i).length -1).get("lv").setValidators(this.forbibString())

    } 
  }
  this.ser.ob_myadd.next(this.names[i])





},20)
}

//myadd = new Map<string,Map<string,Array<string> >>()
myadd = new Map<string,myadd_whole >()

selectItem(a:string,we:any){
  we.value =a;
}




 confirmItem(we:any){
  

  let a = we.value;
  
  /*
  let col;
  col = (this.getAB().at(0).get("skills") as FormArray).at(0).get("mycolor").value; 
  console.log("col",col)  */
    
  for(let i=0;i<this.getAB().length;i++){
    if(a== this.getAB().at(i).get("myname").value){
      this.no_match=false;
      setTimeout(async ()=>{
        (this.nomatchbox.nativeElement as HTMLElement).style.display ='none'
      },450)
     
      let minimap = new Map<string,myadd_attr >()
      for(let r =0;r< this.getSkills(i).length;r++){
        
        let mini_list = Array<string>(2);
       
        const lv:string =this.getSkills(i).at(r).get("lv").value.trim()
        const skill:string = this.getSkills(i).at(r).get("skill").value.trim()
        const mycolor = this.getSkills(i).at(r).get("mycolor").value;
        const attr1 = this.getSkills(i).at(r).get("context_skill").value
        const  attr2 = this.getSkills(i).at(r).get("context_lv").value
        const myposition:the_pos = this.getSkills(i).at(r).get("myposition").value
        const bullet:number[] = this.getSkills(i).at(r).get("mybullet").value 
        const order:number = this.getSkills(i).at(r).get("myorder").valid ? parseInt(this.getSkills(i).at(r).get("myorder").value) : 1 
         
        if(!this.blank(lv) && !this.blank(skill) ){
         
          minimap.set(skill, {lv:lv,mycolor:mycolor,attr1:attr1,attr2:attr2,position:myposition,bul:bullet,order:order}  );
          
        

        }
      }

      let card = new myadd_whole()
      card.name = a

      if(this.cardGroup.at(i).value != "" ){
        card.group = (this.cardGroup.at(i).value as group_choose).group_name
      }

      card.des = this.add_topic.get(a).des
      card.star = this.add_topic.get(a).star
      card.img =this.skill_attr.get(a).img
      card.my_list = minimap
      this.myadd.set(a,card);
      this.ser.ob_myadd.next(a)
      this.appear_group_sidenav(a,"","add")
      return
    }
    
      
  } 
  this.no_match=true;
  (this.nomatchbox.nativeElement as HTMLElement).style.display ='flex'

  setTimeout(async ()=>{
    this.no_match=false;
  },2000)
  setTimeout(async ()=>{
    (this.nomatchbox.nativeElement as HTMLElement).style.display ='none'
  },2450)
  
}

prev_skill:string;

focusSkill(name:any,i:number,r:number){
  this.prev_skill =this.getSkills(i).at(r).get("skill").value.trim();
}

formContainDupSkill(skill:string,i:number,decision:boolean=true):{find:boolean, myadd_arr:myadd_attr } {
  for(let r =this.getSkills(i).length-1 ;r >= 0 ;r--){
    const the_lv = this.getSkills(i).at(r).get("lv").value.trim()
    const pass_skill = this.getSkills(i).at(r).get("skill").valid
    const the_skill = this.getSkills(i).at(r).get("skill").value.trim()
    let pass_lv:boolean =  this.getSkills(i).at(r).get("lv").valid
    const attr1:string  = this.getSkills(i).at(r).get("context_skill").value;
    const attr2:string = this.getSkills(i).at(r).get("context_lv").value;
    const myposition:the_pos = this.getSkills(i).at(r).get("myposition").value
    const color = this.getSkills(i).at(r).get("mycolor").value;
    const bullet:number[] = this.getSkills(i).at(r).get("mybullet").value
    const order:number = this.getSkills(i).at(r).get("myorder").valid ? parseInt(this.getSkills(i).at(r).get("myorder").value) : 1 
    let check_single = true;
    if(this.getSkills(i).at(r).get("lv").disabled){
      pass_lv = true
      check_single=false
    }
  
    if( the_skill==skill && pass_skill && !this.blank(the_lv,check_single) && pass_lv ){
     
      if(decision){
        
        return {find:true, myadd_arr:{lv: the_lv,mycolor:color,attr1:attr1, attr2: attr2, position:  myposition, bul:bullet,order:order  } }
      }
      else{
        return {find:true, myadd_arr:  {} as unknown as myadd_attr  }
      }
    }
  }    
     

  return {find:false, myadd_arr:{} as myadd_attr  }
    


}




alterSkill(name:any,t_skill:string,t_lv:string,i:number,r:number,word_color:string){
  const the_skill:string = t_skill.trim();
  const the_lv:string = t_lv.trim();
  const pass_skill:boolean =  this.getSkills(i).at(r).get("skill").valid;
  let  pass_lv:boolean =  this.getSkills(i).at(r).get("lv").valid;
  const attr1:string  = this.getSkills(i).at(r).get("context_skill").value;
  const attr2:string = this.getSkills(i).at(r).get("context_lv").value;
  const myposition:the_pos = this.getSkills(i).at(r).get("myposition").value
  const bullet:number[] = this.getSkills(i).at(r).get("mybullet").value;
  const order:number = this.getSkills(i).at(r).get("myorder").valid ? parseInt(this.getSkills(i).at(r).get("myorder").value) : 1 
  if(this.myadd.has(name)){
    
    let mini_list:myadd_attr = {mycolor:word_color,lv:the_lv,attr1: attr1,attr2:attr2,position:myposition,bul:bullet,order:order}
    let check_single:boolean = true

    if (t_lv=="" && this.getSkills(i).at(r).get("lv").disabled  ){
        check_single =false
        pass_lv=true
    }



    if( this.myadd.get(name).my_list.has(this.prev_skill) ){
      //console.log("in top skill")
      if( !this.blank(the_skill) && !this.blank(the_lv,check_single)  && pass_skill && pass_lv   ){
        

        this.myadd.get(name).my_list.set(the_skill,mini_list)
         
        let findDupSkill = this.formContainDupSkill(this.prev_skill,i)
         
        
        //let prev_mini_list:myadd_attr = {lv:findDupSkill.myadd_arr.lv, mycolor:findDupSkill.myadd_arr.mycolor, attr1: findDupSkill.myadd_arr.attr1 , attr2:findDupSkill.myadd_arr.attr2  ,position:findDupSkill.myadd_arr.position,bul:findDupSkill.myadd_arr.bul  } 
        if(!findDupSkill.find){
          this.myadd.get(name).my_list.delete(this.prev_skill)
        }
        else{
        
          this.myadd.get(name).my_list.set(this.prev_skill,findDupSkill.myadd_arr)
        }
        
      }
      else{
        this.myadd.get(name).my_list.delete(this.prev_skill)
        let findDupSkill = this.formContainDupSkill(this.prev_skill,i)
        //let prev_mini_list =  {lv:findDupSkill.myadd_arr.lv, mycolor:findDupSkill.myadd_arr.mycolor, attr1: findDupSkill.myadd_arr.attr1 , attr2:findDupSkill.myadd_arr.attr2  ,position:findDupSkill.myadd_arr.position,bul:findDupSkill.myadd_arr.bul  } 
        if(findDupSkill.find){
          this.myadd.get(name).my_list.set(this.prev_skill,findDupSkill.myadd_arr)
        }


      }
     
    }
    else{
     // console.log("in but skill")
      if(!this.blank(the_skill) && !this.blank(the_lv,check_single)  && pass_skill && pass_lv  ){
        
        this.myadd.get(name).my_list.set(the_skill,mini_list)
        }
    }

    this.ser.ob_myadd.next(name)

  }

}

alterLv(name:any,t_skill:string,t_lv:string,i:number,r:number,word_color:string){
  console.log(name);
  const the_skill = t_skill.trim();
  const the_lv= t_lv.trim();
  const pass_skill:boolean =  this.getSkills(i).at(r).get("skill").valid
  const pass_lv:boolean =  this.getSkills(i).at(r).get("lv").valid
  const attr1:string  = this.getSkills(i).at(r).get("context_skill").value;
  const attr2:string = this.getSkills(i).at(r).get("context_lv").value;
  const myposition:the_pos = this.getSkills(i).at(r).get("myposition").value
  const bullet:number[]  =this.getSkills(i).at(r).get("mybullet").value;
  const order:number = this.getSkills(i).at(r).get("myorder").valid ? parseInt(this.getSkills(i).at(r).get("myorder").value) : 1 
  if(this.myadd.has(name)){
   
    let mini_list:myadd_attr = {mycolor:word_color,lv:the_lv,attr1: attr1,attr2:attr2,position:myposition,bul:bullet,order:order}

    
 

  
      if( !this.blank(the_skill) && !this.blank(the_lv) && pass_skill && pass_lv  ){
        this.myadd.get(name).my_list.set(the_skill,mini_list)
      }
     else{
        this.myadd.get(name).my_list.delete(this.prev_skill)
        let findDupSkill = this.formContainDupSkill(this.prev_skill,i)

        if(findDupSkill.find){
          this.myadd.get(name).my_list.set(this.prev_skill,findDupSkill.myadd_arr)
        }

    }
  
  
    this.ser.ob_myadd.next(name)



  }
}



alterColor(name:string,t_skill:string,t_lv:string,dna:any =null,i:number,r:number){
  const the_lv:string = t_lv.trim()
  const the_skill:string = t_skill.trim()
  let pass_lv = this.getSkills(i).at(r).get('lv').valid
  const  pass_skill = this.getSkills(i).at(r).get('skill').valid 

  const attr1:string = this.getSkills(i).at(r).get("context_skill").value
  const attr2:string = this.getSkills(i).at(r).get("context_lv").value 
  const myposition:the_pos = this.getSkills(i).at(r).get("myposition").value 
  const bullet:number[]  = this.getSkills(i).at(r).get("mybullet").value  
  const order:number =this.getSkills(i).at(r).get("myorder").valid ? parseInt(this.getSkills(i).at(r).get("myorder").value) : 1 
  if(dna){
    this.getSkills(i).at(r).get("mycolor").setValue(dna.value)
  }
  

  let single_check:boolean = true;
  if( this.getSkills(i).at(r).get('lv').disabled  ){
    pass_lv= true; single_check=false
    
  }

  if(!this.blank(the_skill) && !this.blank(the_lv,single_check) && pass_skill && pass_lv ){
    if(this.myadd.has(name)){
      let minilist:myadd_attr = {mycolor:dna.value,lv:the_lv,attr1:attr1,attr2:attr2,position:myposition,bul:bullet,order:order}
      this.myadd.get(name).my_list.set(the_skill,minilist)
      this.ser.ob_myadd.next(name)
    }
  }
}

star:number =1;
starClick(num:number,name:string){
this.add_topic.get(name).star = num
if( this.myadd.has(name))
  this.myadd.get(name).star = num


}












blank(w:string,bol:boolean = true ){
  console.log(w)
  if(bol){
    if(w){
      for(let i =0; i<w.length;i++){
        console.log(i);
        if(w.substring(i,i+1) !=' '){

          return false
        }
      }
    }
    
    return true


  }
  else{
    return false;
  }

}
searchWord2(we:string,name:string){
  try{
  we =we.toLowerCase()
  name = name.toLowerCase()
  return name.search(we)
  }catch(e){
    return  -1
  }
  
 
} 

searchWord(we:any){
  this.founds.length =0;
  
  try{
  this.names.forEach(w=>{
   
    let word:string = we.value.trim()
    word = word.toLowerCase()
    let w_low= w.toLowerCase()
    let position:number = w_low.search(word)
    if(position != -1 && !this.blank(word)){

      this.founds.push(w);
    }
  })
  }
  catch(e){
    console.log("not word")
  }
  
 

}

collap:BehaviorSubject<boolean> = new BehaviorSubject(true)
outClick(e:any){
  if(e.target.isEqualNode(this.we.nativeElement) ){
     this.rd.setStyle(this.wecontent.nativeElement,"display","block"); 
  } 
  else{
    this.rd.setStyle(this.wecontent.nativeElement,"display","none");
    
  }

  if( !(this.sidenav.nativeElement).contains(e.target)   ){
    
    this.collap.next(true)
  }
  
  
  
  
}


/*

top = new FormControl("")
toppingList = [{food:'Orange',price:1}, {food:'Mushroom',price:2}, {food:'garlic',price:2} ,{ food:'Onion', price:3},{food:'Sugar',price:4}]; 
total:number =0
total_price(){
  this.total =0; 
  for(let i =0; i <this.top.value.length;i++){
    this.total  += (this.top.value[i] as unknown as w)?.price  
  }
  
} */ 



my_color:string[] =["black","red","purple","orange","rgb(0, 255, 200)","green","blue","rgb(170, 163, 163)","rgb(63, 63, 213)","rgb(194, 73, 97)"];
disableSelect = new FormControl(false);

matselect1 ="matselect0";
select_color:string;

 dna = new FormControl<string|null>(null);  


specified_pos:Array<the_pos> =[{index:1,value:"space-between"},{index:2,value:"start"} ]
groups = new FormControl("",Validators.required)
mygroups:Array<group_choose> =[{group_name:'',opened:false,appear_slide:false}]







appear_group_sidenav(name:string,prev_group:string,status:string){
  if(status =='delete'){
    let prev_group_exist:boolean = false;
    [...this.myadd].forEach(e=>{
      if(e[1].group ==prev_group){
        prev_group_exist = true
      }

    })

    let tar_group  = this.mygroups.find( e=> e.group_name==prev_group   )
    if(tar_group){
      tar_group.appear_slide  = prev_group_exist
    }
    else{
      //console.log("error: no exist group");
    }

  }
  else if(status=='add'){
    if(this.myadd.has(name) ){
       let group_id = this.myadd.get(name).group
       let tar_group  = this.mygroups.find( e=> e.group_name==group_id   )
       tar_group.appear_slide = true;
       
    }

  }
   
  
}















add_group(){
  
  let match = this.mygroups.find(list=>list.group_name == this.groups.value )
    

   if(this.groups.valid && !match){
      this.mygroups.push( {group_name:this.groups.value,opened:false,appear_slide:false} )
   }
}
   
delete_group(group_name:string){
    
    for(let i=0;i<this.cardGroup.length;i++ ){
      if(this.cardGroup.at(i).value.group_name == group_name){
       
        this.cardGroup.at(i).setValue('')
      
      }
    }
 
    let card_exist:boolean =false; 
    let name_card:string = null
    this.myadd.forEach( (val,key) =>{
      if(val.group == group_name){
        this.myadd.get(key).group = ''
        card_exist =true
        name_card = key
      }
    }
    )
    if(card_exist)
      this.appear_group_sidenav(name_card,'','add')
  

    let id_mygroups = this.mygroups.find((e,i)=>e.group_name ==group_name)
    let id_r = this.mygroups.indexOf(id_mygroups)
    this.mygroups.splice(id_r,1)
    this.fetch_delete_i =true;
}





prev_item:HTMLElement =null;
prev_i:number =null;
fetch_delete_i:boolean = null




open(itemSlide:IonItemSliding,item:HTMLElement,i:number, ){
 itemSlide.open('end');
 
 if( !item.isEqualNode(this.prev_item) && this.prev_item ){
    this.mygroups[i].opened =true; 
    if( this.mygroups[this.prev_i]){
      this.mygroups[this.prev_i].opened= false;
      if(this.fetch_delete_i  && this.prev_i ==i)
         this.mygroups[i].opened =true; 
    }
  
    this.prev_item = item 
    this.prev_i = i

  }
else {
  this.mygroups[i].opened =true; 
  this.prev_item = item 
  this.prev_i = i

}
this.fetch_delete_i =false;

  
}
group_dismiss(){
  console.log("this")
  if(this.prev_i){
    this.mygroups[this.prev_i].opened =false;
    this.prev_item = null
    this.prev_i= null;
    
  }
}
close(itemSlide:IonItemSliding,item:HTMLElement,i:number){
  console.log("in close")
  
  itemSlide.closeOpened()
  setTimeout(e =>{
  itemSlide.getSlidingRatio().then(num =>{
    if(num==0  ){
     
        if(this.prev_item){
          console.log(" in close 2 ",i)
          if( this.mygroups[this.prev_i]){
            this.mygroups[this.prev_i].opened= false;
          }
          this.prev_item =null; this.prev_i =null
        }
      


      }
    
  

  })
  },100)
            
          
  
}







/*
text_color_selection(color:string){
  if(color==this.my_color[0]){
      this.matselect1 ="matselect0"
  }
  if(color==this.my_color[1]){
    this.matselect1 ="matselect1"
  }
  if(color==this.my_color[2]){
    this.matselect1 ="matselect2"
  }
  if(color==this.my_color[3]){
    this.matselect1 ="matselect3"
  }
  if(color==this.my_color[4]){
    this.matselect1 ="matselect4"
  }
  if(color==this.my_color[5]){
    this.matselect1 ="matselect5"
  }
  if(color==this.my_color[6]){
    this.matselect1 ="matselect6"
  }

    itemSlide.closeOpened().then(val =>{
      if(val){
        console.log(" in close1")
        this.mygroups[i].opened =false
       
        this.prev_item =null;
        this.prev_i=null
      }else{
          console.log( " in close2" )
          setTimeout(e=>{ 
              itemSlide.getSlidingRatio().then(num =>{
              console.log(num)
              if( num==0 && !item.isEqualNode(this.prev_item) ){
                console.log("in here")
                this.mygroups[this.prev_i].opened = false;
                this.prev_i =null;
                this.prev_item=null
              
          
            }
          })


}*/

  ngDestroy(){
    console.log("home destroy");
  }

  student = {name:"Khang",id:1} 
  async openPopUp(a:Event) {
    const  modal = await this.popCtrl.create({
      component: PopUpComponent,
      componentProps: {student:this.student} ,
      event:a,
      backdropDismiss:false,
   
    })
    await modal.present();
    modal.onWillDismiss().then(data=>{
      //data.data = {name:"Chill",id:0}
    })
    modal.onDidDismiss().then(data=>{
      //data.data = {name:"Chill",id:1}
      console.log(data.data)
    })
  }

 dismissPlayer(){
  this.add_player.dismiss()
 }

}





 
