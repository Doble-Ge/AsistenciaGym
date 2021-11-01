import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'admin',component:LoginComponent}
,{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU',component:AdminPrincipalComponent},
{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU/crearcliente',component:CrearClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
