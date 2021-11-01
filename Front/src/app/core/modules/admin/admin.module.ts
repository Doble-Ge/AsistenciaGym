import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component'

@NgModule({
  declarations: [
    LoginComponent,
    AdminPrincipalComponent,
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
