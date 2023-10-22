import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router, NavigationEnd, Params, ParamMap } from '@angular/router';
import {a,dash,Dashes} from "../classes";
import {map, switchMap} from "rxjs/operators"
import { Observable, of,Subject } from 'rxjs';
import {myservice} from "../myservice"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ins:string="--";
  ins2:string ="--";


  myobs:Observable<string|number>;
  mydash:dash = {} as unknown as dash;


  constructor(private route:ActivatedRoute,private router:Router,private ser:myservice) { 
    this.route.paramMap.subscribe( 
      (param:ParamMap) =>{
        console.log("param dashboard")
        this.mydash.name = param.get("name");
        this.mydash.id = parseInt(param.get("id"));
     
      }

    ) 
    
   /* this.route.data.subscribe((dash:{mydash:dash})=>{
   
      this.mydash.name = dash.mydash.name ;
      this.mydash.id = dash.mydash.id;
      console.log("data -i",dash.mydash.name)
    } )  
      */
    

    
    
   
  }


  ngOnInit() {
   
    this.myobs= this.route.paramMap.pipe(
      switchMap((param)=>{
        this.ins2 = param.get("name1");
        //console.log(this.ins);
        return of(1,"hi");
      })
    ) 

   

  }

  addBehave(){
    this.ser.addBehave();
    console.log("ins2 ",this.ins2);
  }

  naviBack(){
    this.ser.mysubject3.next([...Dashes]);
    this.ser.mysubject31.next(Dashes);
    this.router.navigate(["..",{id:this.mydash.id}],{relativeTo:this.route} )

  }
  naviBack2(){
   // this.router.navigate([".."]); // THIS IS NOT RETURN A STEP, BUT START AT ROOT
  // this.router.navigate(["../"],{relativeTo:this.route}); //careful, this still back to root. Same as navigate(['/'])
  //this.router.navigate([".",".."]); // error ,since start at root, then back.      this.router.navigate(["."],{relativeTo:this.route}); // work, but this.router.navigate([".",".."],{relativeTo:this.route}) not work

  //  this.router.navigate([".."],{relativeTo:this.route});

  }
  ngOnDestroy(){
    console.log("dashboard destroy");
  }
}
