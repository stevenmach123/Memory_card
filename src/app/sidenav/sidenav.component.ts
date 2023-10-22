import { Component, OnInit,Renderer2,EventEmitter,Output,Input,ViewChild, ElementRef } from '@angular/core';
import {Router,ActivatedRoute, RouterLinkActive} from "@angular/router"

import {myservice,myservice2} from "../myservice"
import {a,dash,group_choose,myadd_attr,myadd_whole} from "../classes";
import {BehaviorSubject, Observable,Subject} from "rxjs";
import { trigger,state,style,animate,transition, keyframes} from '@angular/animations';

import { map, filter, tap } from 'rxjs/operators' ;
import { MatExpansionPanel } from '@angular/material/expansion';
import { faTruckField } from '@fortawesome/free-solid-svg-icons';

interface bun{
  collapsed:boolean;
  width:number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
      trigger('slide',[
        state('initial',style({margin:'0rem 0rem 0rem 0rem',opacity:1,display:'flex'})),
        state('next',style({margin:'0rem 0rem 0rem 1rem',display:'none'})),
        transition('initial => next',[ animate(700) ]),
        transition('next => initial', [ 
          
          animate(400, keyframes([   
          style({opacity:0,margin:'0rem 0rem 0rem 1rem' , display:'flex',offset:0}),
          style({opacity:0.4,margin:'0rem 0rem 0rem 0.6rem',offset:0.5}),
          style({opacity:1,margin:'0rem 0rem 0rem 0rem',offset:1}) 
          ])),
          
          ]),
          transition('void=>*', [style({opacity:0,transform:'translateY(-5px)'}), animate(500,style({opacity:1,transform:'translateY(0px)'}))] )
          
        ]),
      trigger('rotate',[
        state('initial',style({transform:'rotate(0deg)'})),
        state('next',style({transform:'rotate(-180deg) translateY(0rem)'   })),
        transition("initial <=> next",animate(400))

      ])

               
                  



    

  ],
  host:{
    '(document:click)': 'outClick($event)'
    
  },

})

export class SidenavComponent implements OnInit {
  
  @Input() myadd:Map<string,myadd_whole>;
  @Input() mygroups:Array<group_choose>;  
  @Input() out_click:BehaviorSubject<boolean> 
   collapsed:boolean ;

  @ViewChild("smallPanel") smallPanel:ElementRef 
  
  @ViewChild("sidenav2") sidenav2:ElementRef;
  @ViewChild("plus") plus:ElementRef;
  

  constructor(private rd:Renderer2, private router:Router, private route:ActivatedRoute, public ser:myservice) { }
  
  dashes$:Subject<dash[]>; 
  
  arr:Subject<number[]>
  myadd2:Observable<Map<string,myadd_whole> > 
  
 see_myadd(){
  this.myadd2.subscribe(val=>console.log(val))
 }
  scroll_nav2(){
      if(this.plus){ 
        console.log("nav2")
        this.sidenav2.nativeElement.scrollLeft = 0;
        
    
      // this.rd.setStyle(side_nav2,"max-height","1px") // should work with 1px, not 1
       // scrollLeft, can't put in this.rd(ele,"scrollLeft", __  ) 0 or 0px is not work
       //this.sidenav2.nativeElement.scrollLeft =0  or side_nav2.scrollLeft=0 is ok 
      } 

      
     
  }


  ngOnInit() {
    this.dashes$ = this.ser.getDashes(); 
    this.arr  =this.ser.arr;
    this.dash_emit.emit(this.dashes$);
    this.out_arr.emit(this.arr)
    this.out_click.subscribe(val=>{
    
      this.collapsed=true
    })
    
    this.myadd2=this.ser.ob_myadd.pipe(
      map(name => {    
          if(this.myadd.has(name)){   
            let ar:Array<[string,myadd_attr]> =Array.from(this.myadd.get(name).my_list).sort((a,b) =>a[1].order -b[1].order )
            this.myadd.get(name).arr_my_list =ar
         
          }
          return this.myadd
    }) 
    )
    
    
    
  }
  

  @Output() dash_emit =new EventEmitter<Subject<dash[]>>();
  @Output() out = new EventEmitter<any>();
  // @Output() out_arr = new EventEmitter<number[]>();
  @Output() out_arr = new EventEmitter<Observable<number[]>>();

  datas = [
    {
      link:"dashboard",
      icon:"fa fa-home",
      name:"Dashboard",
      inter:{name1:"dashboard",name2:"Dashboard"}
    },
    {
      link:"product",
      icon:"fa-solid fa-bag-shopping",
      name:"Product",
      inter:{name1:"product",name2:"Product",name3:[1,2]}
    }

  ]
  navi(a:any){
    this.router.navigate(["home"],{state:{a:1,b:2}});
  }
  checkActive(a:RouterLinkActive){
    console.log("home is ",a.isActive);
  }

  he(we:any){
    let num:string = we.offsetWidth.toString() + "px";
    let bun1:bun = {} as unknown as bun;
    
   
    bun1.collapsed = this.collapsed; 
    bun1.width = we.offsetWidth;
    
    if(!this.collapsed)
      
      this.rd.setStyle(we,"min-width",num);
    
    this.out.emit(bun1);


  }
  sign:boolean = false;
  id_panel =0;
  act_k:boolean = false; 
  closeGPanel(group:group_choose){
      let open_all:boolean= true;
      for(let [key,value] of this.myadd ){
         if(value.group == group.group_name && value.toggle ==false){
           open_all= false;
           break;
         }
      }
      if(!open_all){
        
        this.myadd.forEach(item=>{
          if(item.group == group.group_name )
              item.toggle = true

        })
      }
      else{
        this.myadd.forEach(item=>{
          if(item.group == group.group_name )
              item.toggle = false

        })


      }
      
    
   
  }


  openS(item:myadd_whole){
    if(!item.toggle ){
      item.toggle = true;
      this.collapsed =false;
    }
    else{
      item.toggle =false;
    }
  }





  f(li:any){
    console.log('f')
   
  }

 
//---------
  
outClick(e:any){
  
}





}
