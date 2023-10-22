import { Injectable } from "@angular/core";
import { Observable, Subscriber, BehaviorSubject,Subject } from "rxjs";
import { map, filter, tap } from 'rxjs/operators' 
import {dash,Dashes,FileHandle,check_attr, skill_attrs,bullet} from "./classes";
@Injectable()
export class myservice{

   private val=2
    obs = new Observable((r)=>{
        r.next(1)
        r.next(2)
        r.next(3)
        r.next(4)
        r.next(5)
       
    }).pipe(
                 //tap
        filter(data => data > 2),                        //filter
              //tap
        map((val) => { return val as number * 2 }),      //map
    )

    behave = new BehaviorSubject<any>(1);
    addBehave(){
        this.behave.next(this.val);
        this.val+=1;
    }

     
    hello(){
        
        this.obs.pipe(
            map((val) => { return val as number * 3 }),   
            tap(data => console.log('final2 '+data)) 
        )
    }

  //----
   private mydash$ = new BehaviorSubject<dash[]>(Dashes);
   private constant:number =100;
   private mycomb$ = new BehaviorSubject<dash[]>([]);
   arr:BehaviorSubject<number[]> = new BehaviorSubject<number[]>([0,1])


   mysubject3 = new BehaviorSubject<dash[]>([...Dashes]);
   mysubject31 = new BehaviorSubject<dash[]>([]);

   getDashes(){
    return this.mydash$;
   } 
   addDashItem(a:string){
        let item:dash;
        item = {id:this.constant++,name:a} 
        Dashes.push(item);
        this.getDashes().next(Dashes);   // also try with 2.1 
        this.mysubject3.next([...Dashes])

        //way 2
         // this.getDashes().next([...Dashes]);
        

   }


   getMyComb(){
    return this.mycomb$;
   }
   addMyComb(e:dash[]){
     this.mycomb$.next(e);
   }
   findDash(info:string){
    return this.mydash$.pipe(
        map(dashes => dashes.find(item => item.name ==info))
    );
   }
 
  

   

   //----
  
 transfer_from_setting  = new BehaviorSubject<skill_attrs>(new skill_attrs())
  minor_setting =new BehaviorSubject<skill_attrs>(new skill_attrs())
  ob_myadd = new BehaviorSubject<string>('')

  //---
   newsubject:Subject<bullet > = new Subject() 
   newbullet:bullet = new bullet()
   
  
  
  /* 
    /In modal1.component.ts
   this.ser.setWholeBullet(this.mybullet)
    this.ser.getWholeBullet()
    \ 
    setWholeBullet(mybullet:bullet){
         this.newbullet = mybullet

   }
   getWholeBullet(){
       
        this.newsubject.next(this.newbullet)
        
   }   
   
   or
   getWholeBullet(mybullet:bullet){
        
        this.newsubject.next(mybullet)
        
   }   

   */


  /*
    newsubject:Subject<Observable<number> > = new Subject() 
    setWholeBullet(mybullet:bullet){
        this.newsubject.next(mybullet.subBullet())
   }



   */


  

   
   
}
export class myservice2{
  static N= 999
  //static order = Array.from(Array(this.N).keys()).map(((i,x)=> x+1))
 
}