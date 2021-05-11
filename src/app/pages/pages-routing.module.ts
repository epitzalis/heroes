import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ROUTES } from '../constants/routes';

export const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: `/${ROUTES.HOME}`,
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: `/${ROUTES.HOME}`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})

export class PagesRoutingModule {}


