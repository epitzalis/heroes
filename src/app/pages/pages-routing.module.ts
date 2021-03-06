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
    path: ROUTES.CREATE,
    loadChildren: () => import('./create/create.module').then(
      module => module.CreateModule
    )
  },
  {
    path: `${ROUTES.EDIT}/:id`,
    loadChildren: () => import('./edit/edit.module').then(
      module => module.EditModule
    )
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


