import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'deputados'},
  {
   path: 'deputados',
   loadChildren: () => import('./deputados/deputados.module').then(m => m.DeputadosModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule) 
  },
  {path: '**', redirectTo: 'deputados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
