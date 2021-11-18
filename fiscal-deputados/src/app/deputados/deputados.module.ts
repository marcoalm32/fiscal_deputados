import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputadosRoutingModule } from './deputados-routing.module';
import { DeputadosComponent } from './components/deputados/deputados.component';


@NgModule({
  declarations: [
    DeputadosComponent
  ],
  imports: [
    CommonModule,
    DeputadosRoutingModule
  ]
})
export class DeputadosModule { }
