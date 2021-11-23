import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoDynamicViewField, PoModalComponent, PoModalModule, PoNotificationService, PoPageEditLiterals } from '@po-ui/ng-components';
import { PoDynamicField } from '@po-ui/ng-components/lib/components/po-dynamic/po-dynamic-field.interface';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
import { map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { DeputadoServiceContract } from 'src/app/shared/model/deputado-service.contract';
import { RespostaModel } from 'src/app/shared/model/resposta.model';
import { DeputadoService } from 'src/app/shared/service/deputado.service';
import { DeputadosModule } from '../../deputados.module';
import { DeputadoDetalhes } from '../../model/deputado-detalhe.model';
import { DeputadoModel } from '../../model/deputado.model';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit, OnDestroy {

  limiteItems: number = 8;
  filtros = {};
  readonly breadcrumb: PoBreadcrumb = {
    items: [{label: 'Visualizar Deputados'}, {label: 'Visualizar Despesas'}]
  }
  
  readonly literals: PoPageDynamicSearchLiterals = {
    filterConfirmLabel: 'Aplicar',
    filterTitle: 'Filtro avançado',
    quickSearchLabel: 'Valor pesquisado:'
  };

  public readonly filters: Array<PoPageDynamicSearchFilters> = [
    { property: 'nome', label: 'Nome', gridColumns: 6 },
    { property: 'partido', label: 'Partido' ,gridColumns: 6 },
    { property: 'estado', label: 'Estado',gridColumns: 6 },
  ];

  readonly campoVisualizacaoDetalhesDeputados: Array<PoDynamicViewField> = [
    {property: 'nomeCivil', divider: 'Dados Pessoais', gridColumns: 4},
    {property: 'sexo', label: 'sexo', gridColumns: 4},
    {property: 'dataNascimento', label: 'Data de Nascimento', gridColumns: 4, type: 'date'},
    {property: 'siglaUf', label: 'Estado', gridColumns: 4},
    {property: 'email', divider: 'Dados para contato', gridColumns: 4},
    {property: 'urlWebsite', gridColumns: 4}
  ]

  parametros = {
    ordem: 'asc',
    ordenarPor: 'nome',
    pagina: 1,
    itens: 10,
  };

  todosDeputados: DeputadoModel[] = [];
  detalheDeputado: DeputadoDetalhes = new DeputadoDetalhes();
  inscricoes: Subscription[] = [];
  filtroNome$: Observable<RespostaModel<DeputadoModel>>;
  @ViewChild('deputadoDetalhesModal') deputadoDetalhesModal: PoModalComponent;
  constructor(
    private router: Router,
    @Inject('deputadoService') private deputadoService: DeputadoServiceContract,
    private poNotification: PoNotificationService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.pegarDeputados(this.parametros);
    
  }

  ngOnDestroy() {
    this.inscricoes.forEach(inscricao => {
      inscricao.unsubscribe();
    });
  }

  pegarDeputados(parametros: any) {
    const inscricao = this.deputadoService.pegarTodosDeputados(this.parametros).subscribe(
      (resposta: RespostaModel<DeputadoModel[]>) => {
        this.todosDeputados = [...this.todosDeputados, ...resposta.dados]
      },
      error => {
        this.poNotification.error('Ocorreu um erro, por favor, tente mais tarde!')
      }
    )
  }

  onAdvancedSearch(filter: any) {

  }

  localizarPorNome(nome: string) {
   
  }
  
  verDespesas() {
   
  }

  aparecerMais(evento: any) {
    this.parametros.pagina = this.parametros.pagina + 1
    this.pegarDeputados(this.parametros);
  }

  exibirDetalhes(idDeputado: number) {
    this.deputadoDetalhesModal.open();
    const isncricao = this.deputadoService.pegarDeputadoId(idDeputado).subscribe(
      ((resposta: RespostaModel<DeputadoDetalhes>) => {
        this.detalheDeputado = resposta.dados
      }),
      error => this.poNotification.error('Erro ao tentar ')
    )
    this.inscricoes.push(isncricao);

  }

}
