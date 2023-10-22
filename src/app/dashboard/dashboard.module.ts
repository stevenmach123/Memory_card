import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const route:Routes =[
  {path:'', component:DashboardComponent},

 
]
 @NgModule({
 imports: [RouterModule.forChild(route),
  CommonModule,
  IonicModule,
   FormsModule
],
 exports: [RouterModule]
 })

 export class DashboardRoute{

  



 }



 /*

 {path:'',component:HomePage,children:[
    {  component:DashboardComponent }
    ]
  }
  */