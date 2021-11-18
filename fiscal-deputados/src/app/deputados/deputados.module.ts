import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputadosRoutingModule } from './deputados-routing.module';
import { DeputadosComponent } from './components/deputados/deputados.component';
import { PoPageModule, PoWidgetModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    DeputadosComponent
  ],
  imports: [
    CommonModule,
    DeputadosRoutingModule,
    PoWidgetModule,
    PoPageModule
  ],
  exports: [DeputadosComponent]
})
export class DeputadosModule { }
