import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromHome from './home';
import * as fromMarketplace from './marketplace';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: fromHome.LandingComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: fromMarketplace.DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'browse',
    pathMatch: 'full',
    component: fromMarketplace.BrowseComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
