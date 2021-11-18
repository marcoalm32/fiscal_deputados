import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputadosRoutingModule } from './deputados-routing.module';
import { DeputadosComponent } from './components/deputados/deputados.component';
import { PoBreadcrumbModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';


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
    PoPageDynamicSearchModule
  ],
  exports: [DeputadosComponent]
})
export class DeputadosModule { }
