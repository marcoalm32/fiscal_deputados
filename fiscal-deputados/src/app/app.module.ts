import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeputadosModule } from './deputados/deputados.module';
import { DespesasModule } from './despesas/despesas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DespesasModule,
    DeputadosModule,
    PoTemplatesModule,
    HttpClientModule,
    PoToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
