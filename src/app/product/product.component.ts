import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router, NavigationEnd, Params, ParamMap } from '@angular/router';
import {a,dash,Dashes} from "../classes";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  mydash:dash=  {} as unknown as dash;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.paramMap.subscribe( 
      (param:ParamMap) =>{
      
        this.mydash.name = param.get("name");
        this.mydash.id = parseInt(param.get("id"));
     
      })
   }
  
  ngOnInit() {}
  ngOnDestroy(){
    console.log("product destroy");
  }
  naviBack(){
    this.router.navigate([".",{id:this.mydash.id ,name:this.mydash.name}])
  }

  naviNext(){
    //this.router.navigate(["/","product","dashboard"]); //Not work 
    //this.router.navigate(["product","dashboard"])  //not work
    this.router.navigate(["home","product","dashboard",{id:this.mydash.id ,name:this.mydash.name}]) // or this.router.navigate(["product"]{relativeTo:this.route})   WORK 

  }
}
