import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'admin',component:LoginComponent}
,{path:'hcBWvERHhVtxfqdLn8j3LdejrxFVTU',component:AdminPrincipalComponent},
{path:':dni'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
