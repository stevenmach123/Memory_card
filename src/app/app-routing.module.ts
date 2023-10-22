import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';





import {DashboardComponent} from "./dashboard/dashboard.component"
import { ProductComponent } from './product/product.component';
import {SidenavComponent} from "./sidenav/sidenav.component"
import {FontAwesomeModule} from"@fortawesome/angular-fontawesome"


const routes: Routes = [
  {
    path: 'home',loadChildren:() => import("./home/home.module").then(m=>m.HomePageModule)  
   
  },
  /*{path: 'dashboard', loadChildren:() => import("./dashboard/dashboard.module").then(m=>m.DashboardRoute)  },
  {path:"product", loadChildren:() => import("./product/product.module").then(m=>m.ProductRoute) },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
