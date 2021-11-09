import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component'

@NgModule({
  declarations: [
    LoginComponent,
    AdminPrincipalComponent,
    CrearClienteComponent,
    AsistenciaComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
