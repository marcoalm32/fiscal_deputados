import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeputadosComponent } from './components/deputados/deputados.component';

const routes: Routes = [
  {
    path: '',
    component: DeputadosComponent
  },
  {
    path: 'despesas/:id',
    loadChildren: () => import('../despesas/despesas.module').then(m => m.DespesasModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeputadosRoutingModule { }
