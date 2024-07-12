import { Routes } from '@angular/router';
import { HelloAngularComponent } from './component/hello-angular/hello-angular.component';
import { Test1Component } from './component/test1/test1.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  {
    path: 'hello', component: HelloAngularComponent
  },
  {path: 'product', component: Test1Component},
  {path: 'login', component: LoginComponent}
];

