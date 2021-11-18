import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeputadosModule } from './deputados/deputados.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeputadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
