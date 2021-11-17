import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { LoginComponent } from './login/login.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [{path:'admin',component:LoginComponent}
,{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU',component:AdminPrincipalComponent},
{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU/crearcliente',component:CrearClienteComponent},
{path:'asistencias',component:AsistenciaComponent},
{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU/turnos',component:TurnosComponent},
{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU/editarcliente',component:EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
