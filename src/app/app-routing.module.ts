import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MachineComponent } from './machine/machine.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'machine',
    component: MachineComponent,
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryPageModule),
  },
  {
    path: 'evidence',
    loadChildren: () =>
      import('./evidence/evidence.module').then((m) => m.EvidencePageModule),
  },
  {
    path: 'maintanance',
    loadChildren: () =>
      import('./maintanance/maintanance.module').then(
        (m) => m.MaintanancePageModule
      ),
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
