import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeputadosComponent } from './components/deputados/deputados.component';

const routes: Routes = [
  {
    path: '',
    component: DeputadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeputadosRoutingModule { }
