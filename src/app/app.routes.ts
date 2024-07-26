import { Routes } from '@angular/router';
import { HelloAngularComponent } from './component/hello-angular/hello-angular.component';
import { Test1Component } from './component/test1/test1.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
  {
    path: 'hello', component: ProductComponent
  },

  {path: 'login', component: LoginComponent},
  

];

