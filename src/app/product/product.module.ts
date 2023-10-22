import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../home/home.page';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent} from './product.component';

const route:Routes =[
  {path:'', component:ProductComponent},
  {path: 'dashboard', loadChildren:() => import("../dashboard/dashboard.module").then(m=>m.DashboardRoute) },

]

 @NgModule({
 imports: [RouterModule.forChild(route),
  CommonModule,
  IonicModule,
   FormsModule
],
 exports: [RouterModule]
 })

 export class ProductRoute{}



 /*

 {path:'',component:HomePage,children:[
    {  component:DashboardComponent }
    ]
  }
  */