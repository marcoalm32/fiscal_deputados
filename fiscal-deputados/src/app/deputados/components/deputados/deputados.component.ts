import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService, PoPageEditLiterals } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
import { map, Observable, Subscription, tap } from 'rxjs';
import { DeputadoServiceContract } from 'src/app/shared/model/deputado-service.contract';
import { RespostaModel } from 'src/app/shared/model/resposta.model';
import { DeputadoService } from 'src/app/shared/service/deputado.service';
import { DeputadosModule } from '../../deputados.module';
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
    items: [{label: 'Visualizar Deputados', action: this.voltar.bind(this)}, {label: 'Visualizar Despesas'}]
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

  MostrarMais: boolean = true;
  parametros = {
    ordem: 'desc',
    ordenarPor: 'nome',
    pagina: 1,
    itens: 8,
  };
 
  // deputadosList: any[] = [
  //   {nome: 'Bolsonaro', partido: 'PSL', estado: 'Rio de Janeiro'},
  //   {nome: 'Lula', partido: 'PT', estado: 'São Paulo'},
  //   {nome: 'João Amoedo', partido: 'Novo', estado: 'São Paulo'}
  // ]

  todosDeputados: DeputadoModel[] = [];

  inscricoes: Subscription[] = [];
  constructor(
    private router: Router,
    @Inject('deputadoService') private deputadoService: DeputadoServiceContract,
    private poNotification: PoNotificationService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.pegarDeputados(this.parametros);
  }

  ngOnDestroy() {
    this.inscricoes.forEach(inscricao => {
      inscricao.unsubscribe();
    });
  }

  pegarDeputadoId() : Observable<any> {
    return this.route.paramMap.pipe(
      map(paramsMap => {
        return paramsMap.get('id');
      })
    )
  }

  pegarDeputados(parametros: any) {
    const inscricao = this.deputadoService.lerDeputados(this.parametros).subscribe(
      (resposta: RespostaModel<DeputadoModel>) => {
        this.todosDeputados = [...this.todosDeputados, ...resposta.dados]
      },
      error => {
        this.poNotification.error('Ocorreu um erro, por favor, tente mais tarde!')
      }
    )
  }

  onAdvancedSearch(filter: any) {

  }

  onQuickSearch(filter: any) {
    
  }
  

  aparecerMais() {
    this.parametros.pagina = this.parametros.pagina + 1

  }

  exibirDetalhes(evento: any) {
    console.log('detalhes')
  }

  voltar() {
    this.router.navigate(['']);
  }
}
