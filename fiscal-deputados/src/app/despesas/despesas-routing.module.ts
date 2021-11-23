import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarDespesasComponent } from './components/visualizar-despesas/visualizar-despesas.component';

const routes: Routes = [
  {path: ':id', component: VisualizarDespesasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
