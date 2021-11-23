import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { DeputadoServiceContract } from '../../../shared/model/deputado-service.contract';

@Component({
  selector: 'app-visualizar-despesas',
  templateUrl: './visualizar-despesas.component.html',
  styleUrls: ['./visualizar-despesas.component.scss']
})
export class VisualizarDespesasComponent implements OnInit {

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Visualizar Deputados', action: this.voltar.bind(this) }, { label: 'Visualizar Despesas' }]
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject('deputadoService') private deputadoService: DeputadoServiceContract
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['']).then();
  }

}
