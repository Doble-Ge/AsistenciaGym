import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    LoginComponent,
    AdminPrincipalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
