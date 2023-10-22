import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {myservice} from '../myservice'

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

@NgModule({
    imports:[
       
        CommonModule,
        IonicModule,
        FormsModule ,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatSelectModule,


    ],
    declarations:[
        


    ],
    exports:[

    ],
    providers:[myservice]



})
export class modal1Modal{



}
