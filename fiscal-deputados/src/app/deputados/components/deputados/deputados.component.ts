import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { DeputadoService } from 'src/app/shared/service/deputado.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit {



  constructor(
    private deputadoSerivce: DeputadoService
  ) { }


  ngOnInit(): void {
  }

  voltar() {

  }
}
