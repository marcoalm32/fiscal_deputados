import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { VisualizarDespesasComponent } from './components/visualizar-despesas/visualizar-despesas.component';


@NgModule({
  declarations: [
    VisualizarDespesasComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
