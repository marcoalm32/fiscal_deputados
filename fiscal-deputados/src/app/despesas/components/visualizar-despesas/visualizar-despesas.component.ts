import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { DeputadoServiceContract } from '../../../shared/model/deputado-service.contract';
import { DespesasModule } from '../../despesas.module';

@Component({
  selector: 'app-visualizar-despesas',
  templateUrl: './visualizar-despesas.component.html',
  styleUrls: ['./visualizar-despesas.component.scss']
})
export class VisualizarDespesasComponent implements OnInit {

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Visualizar Deputados', action: this.voltar.bind(this) }, { label: 'Visualizar Despesas' }]
  };

  readonly columns: PoTableColumn[] = [
    {label: 'Tipo da Despesa', property: 'tipoDespesa'},
    {label: 'Nome do Fornecedor', property: 'nomeFornecedor'},
    {label: 'Valor do Documento', property: 'valorDocumento', type: 'currency', format: 'BRL'},
    {label: 'Date do Documento', property: 'dataDocumento', type: 'date'},
  ];
  
  despesasList: DespesasModule[] = [];
  parametros = {
    ordem: 'desc',
    ordenarPor: 'dataDocumento',
    pagina: 1,
    itens: 10,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject('deputadoService') private deputadoService: DeputadoServiceContract,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(['']).then();
  }

  aparecerMais() {

  }



}
