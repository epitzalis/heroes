import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { PrincipalComponent } from './principal/principal.component';
// import { AuthGuard } from '../services/auth-guard.service';
// import { PRINCIPAL, LOGIN, REGISTER, RESET_PASSWORD, PROFILE } from '../constants';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/Home',
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


