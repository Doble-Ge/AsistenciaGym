import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminPrincipalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
