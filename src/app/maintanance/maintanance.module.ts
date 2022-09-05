import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintanancePageRoutingModule } from './maintanance-routing.module';

import { MaintanancePage } from './maintanance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintanancePageRoutingModule
  ],
  declarations: [MaintanancePage]
})
export class MaintanancePageModule {}
