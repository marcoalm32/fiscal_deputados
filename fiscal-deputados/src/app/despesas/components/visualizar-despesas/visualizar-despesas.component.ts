import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { RespostaModel } from 'src/app/shared/model/resposta.model';
import { DeputadoServiceContract } from '../../../shared/model/deputado-service.contract';
import { DespesasModule } from '../../despesas.module';
import { DespesasModel } from './../../model/despesas.model';

@Component({
  selector: 'app-visualizar-despesas',
  templateUrl: './visualizar-despesas.component.html',
  styleUrls: ['./visualizar-despesas.component.scss']
})
export class VisualizarDespesasComponent implements OnInit, OnDestroy {

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Visualizar Deputados', action: this.voltar.bind(this) }, { label: 'Visualizar Despesas' }]
  };

  readonly columns: PoTableColumn[] = [
    {label: 'Tipo da Despesa', property: 'tipoDespesa'},
    {label: 'Nome do Fornecedor', property: 'nomeFornecedor'},
    {label: 'Valor do Documento', property: 'valorDocumento', type: 'currency', format: 'BRL'},
    {label: 'Date do Documento', property: 'dataDocumento', type: 'date'},
  ];

  readonly actionsTable: Array<PoTableAction> = [
    { label: 'Abrir documento', action: this.abrirArquivo.bind(this) },
  ];

  despesasList: DespesasModel[] = [];
  inscricoes: Subscription[] = [];
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

  ngOnDestroy() {
    this.inscricoes.forEach(inscricao => {
      inscricao.unsubscribe();
    });
  }

  pegarDeputadoId(): Observable<any> {
    return this.route.paramMap.pipe(
      map(paramsMap => {
        return paramsMap.get('id');
      })
    );
  }

  pegarDespesas(parametros: any) {
    const inscricao = this.pegarDeputadoId().pipe(
      switchMap(idDeputado => {
        return this.deputadoService.pegarDespesas(idDeputado, parametros);
      })
    ).subscribe(
      (resposta: RespostaModel<DespesasModel[]>) => {
        this.despesasList = [...this.despesasList, ...resposta.dados];
      },
      error => {
        this.poNotification.error('Ocorreu um erro, por favor, tente mais tarde.');
      }
    );
    this.inscricoes.push(inscricao);
  }

  voltar() {
    this.router.navigate(['']).then();
  }

  aparecerMais() {
    this.parametros.pagina = this.parametros.pagina + 1;
    //this.pegarDespesas(this.parametros);
  }

  abrirArquivo(despesa: DespesasModel) {
    const urlDocumento = despesa.urlDocumento
    if(urlDocumento)
      window.open(urlDocumento);
    else
      this.poNotification.warning('Não existe nota fiscal para esta despesa');
  }



}
