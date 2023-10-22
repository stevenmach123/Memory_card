import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from './home.page';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input"
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from  "@angular/material/button"
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import { HomePageRoutingModule } from './home-routing.module';

import {DashboardComponent} from "../dashboard/dashboard.component"
import { ProductComponent } from '../product/product.component';
import {SidenavComponent} from "../sidenav/sidenav.component"
import {FontAwesomeModule} from"@fortawesome/angular-fontawesome"
import { myservice } from '../myservice';
import {DashResolverService} from "../data_resolver.service"
import {Modal1Component} from "../modal1/modal1.component"
import {PopUpComponent} from "../pop-up/pop-up.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatSlideToggleModule,

    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule
    
    
    
  ],
  declarations: [HomePage,
    DashboardComponent,
    ProductComponent,
    SidenavComponent,
    Modal1Component,PopUpComponent


  ],
  providers:[myservice,DashResolverService]
})
export class HomePageModule {}
