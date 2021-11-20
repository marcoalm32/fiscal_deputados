import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputadosRoutingModule } from './deputados-routing.module';
import { DeputadosComponent } from './components/deputados/deputados.component';
import { PoBreadcrumbModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { DeputadoService } from '../shared/service/deputado.service';


@NgModule({
  declarations: [
    DeputadosComponent
  ],
  imports: [
    CommonModule,
    DeputadosRoutingModule,
    PoWidgetModule,
    PoPageModule,
    PoBreadcrumbModule,
    PoPageDynamicSearchModule,
  ],
  providers: [
    {provide: 'deputadoService', useClass: DeputadoService}
  ],
  exports: [DeputadosComponent]
})
export class DeputadosModule { }
