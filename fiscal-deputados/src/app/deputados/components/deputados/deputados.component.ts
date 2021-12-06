import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoDynamicViewField, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
import { Observable, Subscription} from 'rxjs';
import { DeputadoServiceContract } from 'src/app/shared/model/deputado-service.contract';
import { RespostaModel } from 'src/app/shared/model/resposta.model';
import { DeputadoDetalhes } from '../../model/deputado-detalhe.model';
import { DeputadoModel } from '../../model/deputado.model';
import { DeputadoDetalheView } from '../../model/deputadoDetalheView';
import { deputadosFactory } from '../../factory/deputado.factory';
import {listaEstados} from "../../../shared/utils/lista-estados";

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit, OnDestroy {

  filtros = {};
  readonly breadcrumb: PoBreadcrumb = {
    items: [{label: 'Visualizar Deputados'}]
  }
  readonly literals: PoPageDynamicSearchLiterals = {
    filterConfirmLabel: 'Aplicar',
    filterTitle: 'Filtro avançado',
    quickSearchLabel: 'Nome:'
  };
  public readonly filters: Array<PoPageDynamicSearchFilters> = [
    { property: 'nome', label: 'Nome', gridColumns: 6 },
    { property: 'siglaPartido', label: 'Sigla Partido' ,gridColumns: 6 },
    { property: 'siglaUf', label: 'Estado',gridColumns: 6, options: listaEstados },
  ];
  readonly campoVisualizacaoDetalhesDeputados: Array<PoDynamicViewField> = [
    {property: 'nome', label: 'Nome', gridColumns: 4},
    {property: 'sexo', label: 'Sexo', gridColumns: 4},
    {property: 'dataNascimento', label: 'Data de Nascimento', gridColumns: 4, type: 'date'},
    {property: 'siglaUf', label: 'Estado', gridColumns: 4},
    {property: 'email', label: 'E-mail', gridColumns: 4},
    {property: 'urlWebsite', label: 'link do site', gridColumns: 6}
  ]

  deputadoFactory = deputadosFactory;
  parametros: any = {
    ordem: 'asc',
    ordenarPor: 'nome',
    pagina: 1,
    itens: 10,
  };

  todosDeputados: DeputadoModel[] = [];
  detalheDeputado: DeputadoDetalheView = new DeputadoDetalheView();
  inscricoes: Subscription[] = [];
  filtroNome$: Observable<RespostaModel<DeputadoModel>>;
  @ViewChild('deputadoDetalhesModal') deputadoDetalhesModal: PoModalComponent;
  constructor(
    @Inject('deputadoService') private deputadoService: DeputadoServiceContract,
    private router: Router,
    private poNotification: PoNotificationService,
  ) { }


  ngOnInit(): void {
    this.pegarDeputados(this.parametros);

  }

  ngOnDestroy() {
    this.inscricoes.forEach(inscricao => {
      inscricao.unsubscribe();
    });
  }

  pegarDeputados(parametros: any, eAparecerMais = false) {
    const inscricao = this.deputadoService.pegarTodosDeputados(this.parametros).subscribe(
      (resposta: RespostaModel<DeputadoModel[]>) => {
        if(eAparecerMais)
          this.todosDeputados = [...this.todosDeputados, ...resposta.dados];
        else
          this.todosDeputados = resposta.dados;
      },
      error => {
        this.poNotification.error('Ocorreu um erro, por favor, tente mais tarde!')
      }
    )
    this.inscricoes.push(inscricao);
  }

  filtrarPorNome(nome: string) {
    this.parametros['nome'] = nome;
    this.pegarDeputados(this.parametros.nome);
  }

  buscaAvancada(filtros: any) {
    if (filtros.nome) {
      this.parametros['nome'] = filtros.nome;
    } else {
      this.parametros['nome'] = '';
    }
    if (filtros.siglaPartido) {
      this.parametros['siglaPartido'] = filtros.siglaPartido;
    } else {
      this.parametros['siglaPartido'] = '';
    }
    if (filtros.siglaUf) {
      this.parametros['siglaUf'] = filtros.siglaUf;
    } else {
      this.parametros['siglaUf'] = '';
    }
    this.pegarDeputados(this.parametros);
  }

  renunciarEvento(disclaimers: any[]) {
    const disclaimerObj: any = {};
    disclaimers.forEach(disclaimer => {
      disclaimerObj[disclaimer.property] = disclaimer.value;
    });
    if (disclaimerObj.nome) {
      this.parametros['nome'] = disclaimerObj.nome;
    } else {
      this.parametros['nome'] = '';
    }
    if (disclaimerObj.siglaPartido) {
      this.parametros['siglaPartido'] = disclaimerObj.siglaPartido;
    } else {
      this.parametros['siglaPartido'] = '';
    }
    if (disclaimerObj.siglaUf) {
      this.parametros['siglaUf'] = disclaimerObj.siglaUf;
    } else {
      this.parametros['siglaUf'] = '';
    }
    this.pegarDeputados(this.parametros);
  }

  verDespesas(deputado: DeputadoDetalheView) {
    const id = deputado.id;
    this.router.navigate(['despesas' , id]);
  }

  aparecerMais(evento: any) {
    this.parametros.pagina = this.parametros.pagina + 1
    this.pegarDeputados(this.parametros, true);
  }

  exibirDetalhes(idDeputado: number) {
    this.deputadoDetalhesModal.open();
    const inscricao = this.deputadoService.pegarDeputadoId(idDeputado).subscribe(
      ((resposta: RespostaModel<DeputadoDetalhes>) => {
        this.detalheDeputado = this.deputadoFactory(resposta.dados);
      }),
      error => this.poNotification.error('Ocorreu um erro, por favor, tente mais tarde!')
    )
    this.inscricoes.push(inscricao);

  }

  abrirArquivo(deputado: DeputadoDetalheView) {
    const webSite = deputado.urlWebsite;
    if(webSite)
      window.open(webSite);
    else
      this.poNotification.error('Ocorreu um erro, tente mais tarde!');
  }
}
