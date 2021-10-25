import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/modules/pagina-principal/pagina-principal.module').then(m => m.PaginaPrincipalModule)
  },
  {
    path: '',
    loadChildren: () => import('./core/modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
