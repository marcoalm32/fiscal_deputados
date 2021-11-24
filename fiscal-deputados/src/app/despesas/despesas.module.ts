import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { VisualizarDespesasComponent } from './components/visualizar-despesas/visualizar-despesas.component';
import { DeputadoService } from '../shared/service/deputado.service';
import { PoBreadcrumbModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    VisualizarDespesasComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    PoBreadcrumbModule,
    PoPageModule,
    PoTableModule
  ],
  providers: [
    {provide: 'deputadoService', useClass: DeputadoService }
  ],
})
export class DespesasModule { }
