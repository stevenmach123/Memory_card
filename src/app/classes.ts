

export interface a{
    name1:string;
    names2:string; 
}

export interface dash{
    name:string;
    id:number;
}
export const Dashes:dash[]=[
    {name:"Work",id:1},
    {name:"Shop",id:2}
]

export class myadd_whole{
  name:string =""
  des:string=""
  star:number =1;
  group:string="";
  toggle:boolean =false;

  img:FileHandle = {} as unknown as FileHandle
  my_list?:Map<string,myadd_attr>;
  arr_my_list?:Array<[string,myadd_attr]>  
  
}

export interface the_pos{ 
    index:number
    value:string
}

export interface myadd_attr{
    lv:string;
    mycolor:string;
    attr1:string ;
    attr2:string ;
    position:the_pos;
    order:number;
    bul:number[];
    
}

export class skill_attrs{
    name:string = "";
    attr1:string= "Skill";
    attr2:string = "Lv";
    type1:string="string";
    type2:string ="number";
    img: FileHandle = new FileHandle();
    check_attr:check_attr =  new check_attr();
    bul:number[]=[0,1];


    
}

export class group_choose{
    group_name:string;
    opened:boolean;
    appear_slide:boolean;
    
    constructor(e:group_choose  ={} as group_choose ){
        this.group_name = e.group_name ?? ''
        this.opened = e.opened ?? false;
        this.appear_slide = e.appear_slide ?? false;
       
    }
}

export interface myadd_topic{
    des:string;
    star:number;
    color:string;
 
}
export class check_attr{
    uncheck:boolean =false; 
    uncheck_name:string =null;
    
}

import {BehaviorSubject, Subject} from 'rxjs'

export class bullet{
    bullets = [' ☆ ' ,' ◦ ', ' ⇒ ',' ◇ ', ' ➣ ' , ' ▹ ' ,' ▪ ',' • ',' ◆ ']
    i = 0;
    getBullet(i:number):string{
        if(i>= this.bullets.length){
            return null
        }
        return this.bullets[i]
    }
    bullet_diliver = new BehaviorSubject<number>(0)
    nextBullet(){
        this.bullet_diliver.next(this.i++)
    }
    subBullet(){
       return this.bullet_diliver.asObservable()
    }
}




export interface wood{
 age:number,
 name:string,
}
export class box {
    age:number;
    name:string;
   
    
    /*constructor(e:box = {} as box){
        let {age=0,name="none"} = e
        this.age =age
        this.name = name
    } */
    constructor(e:wood = {} as wood){
      
        this.age = e?.age ?? 0
        this.name = e?.name ?? "none"
    }
}




import {SafeUrl} from "@angular/platform-browser"
import { Injectable } from '@angular/core';


// 
export class FileHandle{
    file:File
    url:SafeUrl
    
}