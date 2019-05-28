import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products/create', component: CreateProductComponent, canActivate: [AuthGuard]},
  {path: 'product/:id', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/register'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
