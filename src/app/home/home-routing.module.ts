import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import '@fortawesome/fontawesome-free/js/all.js';


import {DashboardComponent} from "../dashboard/dashboard.component"
import { ProductComponent } from '../product/product.component';
import {SidenavComponent} from "../sidenav/sidenav.component"
import {DashResolverService} from "../data_resolver.service"

const routes: Routes = [
  { path: '',component: HomePage,
    children:[
      {path: 'dashboard', loadChildren:() => import("../dashboard/dashboard.module").then(m=>m.DashboardRoute), resolve:{mydash:DashResolverService}},
      {path:"product", loadChildren:() => import("../product/product.module").then(m=>m.ProductRoute) },
      {path:"modal1",  loadChildren:() => import("../modal1/modal1.module").then(m=>m.modal1Modal)  }
    ]
    
  
 

  },
   {path:"modal1",  loadChildren:() => import("../modal1/modal1.module").then(m=>m.modal1Modal)  }



 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class HomePageRoutingModule {}


