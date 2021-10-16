import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalModule } from './pagina-principal.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
const routes: Routes = [
  {path:'',component:PaginaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
