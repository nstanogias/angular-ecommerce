import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductService } from './services/product.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import {UserService} from './services/user.service';
import {UserStoreService} from './services/user-store.service';
import {AuthGuard} from './guards/auth.guard';
import {ProductAppInterceptor} from './services/product-app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    CreateProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    ProductService,
    UserService,
    UserStoreService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProductAppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
