import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { EditpostComponent } from './editpost/editpost.component';

const routes: Routes = [
  {
    path: 'new-user',
    component: NewUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'createpost',
    component: CreatepostComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'editpost',
    component: EditpostComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
