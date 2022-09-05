import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintanancePage } from './maintanance.page';

const routes: Routes = [
  {
    path: '',
    component: MaintanancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintanancePageRoutingModule {}
