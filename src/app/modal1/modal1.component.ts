import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import { ElementRef,HostListener,ViewChild,Renderer2,ChangeDetectorRef} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl} from "@angular/platform-browser"
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {Camera,CameraResultType,CameraSource} from '@capacitor/camera'
import {Dashes,dash, myadd_attr, myadd_topic,myadd_whole,group_choose ,box,wood, FileHandle,check_attr,bullet} from "../classes"
import {HomePage} from '../home/home.page';

import { myservice } from '../myservice';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss'],
  providers:[bullet]
  
})
export class Modal1Component implements OnInit {
   @ViewChild("image_input") image_input:ElementRef
   @ViewChild("image_container") image_container:ElementRef
   @ViewChild("big") big:ElementRef
   @ViewChild("myimage") myimage:ElementRef
   @ViewChild("n1") n1:ElementRef
   @ViewChild("n2") n2:ElementRef
   @ViewChild("forth_td") forth_td:ElementRef
   

   the_image:FileHandle = {} as unknown as FileHandle
   @Input() add_top:Map<string,myadd_topic>
  constructor(private modalCtr:ModalController,private rd:Renderer2, private ser:myservice, private san:DomSanitizer, private mybullet:bullet) {
    
    

   }

  ngOnInit() {
    this.mybullet.subBullet().subscribe(e=>{
      console.log("modal bullet ",e)
    })



    this.ser.minor_setting.subscribe(val =>{
      this.title = val.name
      this.attr1_control.setValue(val.attr1) 
      this.attr2_control.setValue(val.attr2)
      this.type1_control.setValue(val.type1)
      this.type2_control.setValue(val.type2)
     
      
      setTimeout(e =>{
        if(val.img.file){
          this.rd.setStyle(this.myimage.nativeElement,"display","block")
          this.the_image   = val.img
        }
        this.id2_bul2 = val.bul[1]
        this.id1_bul2 = val.bul[0]
        this.id2_bul = "cull" + this.id2_bul2 
        this.id1_bul = "bull" + this.id1_bul2 

        if(val.check_attr.uncheck){
          if(val.check_attr.uncheck_name=="check1"){
            this.checked2  =false;
            this.activated(false,'check2')
          }
          else if(val.check_attr.uncheck_name=="check2"){
            this.checked1  =false;
            this.activated(false,'check1')
          }
        }

      },100)

    })

  }

  title:string = ""
  ngAfterViewInit(){
    //this.rd.setAttribute(this.image_container.nativeElement,"style","width:100px;border:1px solid pink")
   
   
  } 
  attr1_control = new FormControl("")
  attr2_control = new FormControl("")
  type1_control = new FormControl("")
  type2_control = new FormControl("") 

  checked1:boolean = true;
  checked2:boolean = true; 
 
  upload_image:any
  



  confirm(){

  let check_prob:check_attr = new check_attr()
    
  
  
  if(!this.checked1 || !this.checked2){
    
      if(!this.checked1 && !this.checked2){
         
      }else {
        this.add_top.get(this.title).color ='aqua' 
        setTimeout(e=>{
          this.add_top.get(this.title).color ='' 
        },100)

        if(this.checked1)
          check_prob = {uncheck:true,uncheck_name:"check1"}
        
        if(this.checked2)
            check_prob = {uncheck:true,uncheck_name:"check2"} 
    }
  }
  else{
    this.add_top.get(this.title).color ='orange' 
    setTimeout(e=>{
      this.add_top.get(this.title).color ='' 
    },100)
  } 
 
    
     let er = {name:this.title,attr1:this.attr1_control.value, attr2:this.attr2_control.value, type1: this.type1_control.value, type2: this.type2_control.value,img:this.the_image,check_attr: check_prob,bul:[this.id1_bul2,this.id2_bul2  ] }
     this.ser.transfer_from_setting.next(er)
     this.modalCtr.dismiss();
    
  }


  hi(){
    console.log("enter 1")
   
  }

  bullets:string[] =  this.mybullet.bullets;
  id1_bul:string  = 'bull0'
  id1_bul2:number = 0;  
id2_bul:string = 'cull0'
id2_bul2:number = 0;
  bull_select(i:number){
    this.id1_bul = 'bull'+ i.toString()
    this.id1_bul2 = i;
  }
  bull2_select(i:number){
    this.id2_bul = 'cull'+ i.toString()
    this.id2_bul2 = i;
  }
  


  onFileSelect(evt,myimage){
    
    let file:File = evt.target.files[0]
    if(file){
      this.rd.setStyle(myimage,"display","block")
      let url:SafeUrl = this.san.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      this.the_image = {file:file,url:url} 
     
    }
  
  
  }
  remove_img(myimage){
    //this.mybullet.nextBullet()
   
    //this.ser.getWholeBullet(this.mybullet)
    //this.ser.getWholeBullet()
    //this.ser.getWholeBullet(this.mybullet);



    this.the_image ={} as unknown as FileHandle;
    this.rd.setStyle(myimage,"display","none")
    
  }
  
  /* async captureImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64


    })
  } */
  activated(toggle:boolean,status:string){
    
    if(status =="check1"){
      if(!toggle){
          this.type1_control.disable({onlySelf:true})
          this.attr1_control.disable({onlySelf:true})
          this.rd.setStyle(this.n1.nativeElement,'opacity',0.3)
          
      }
      else{
        this.type1_control.enable({onlySelf:true})
        this.attr1_control.enable({onlySelf:true})
        this.rd.setStyle(this.n1.nativeElement,'opacity',1)

        
      }



    }
    else if(status=="check2"){
      if(!toggle){
        this.type2_control.disable({onlySelf:true})
        this.attr2_control.disable({onlySelf:true})
        this.rd.setStyle(this.n2.nativeElement,'opacity',0.3)

      }
      else{
        this.type2_control.enable({onlySelf:true})
        this.attr2_control.enable({onlySelf:true})
        this.rd.setStyle(this.n2.nativeElement,'opacity',1)

      }








    }





    
  }

  toggle1(){
    //console.log(this.forth_td.nativeElement.offsetWidth)
    if(this.checked1){
      this.checked1 =false; 
    }
    else{
      this.checked1 =true; 
    }
   
    this.activated(this.checked1,"check1")
  }

  toggle2(){
    if(this.checked2){
      this.checked2 =false; 
    }
    else{
      this.checked2 =true; 
    }
   
    this.activated(this.checked2,"check2")

  }




}
