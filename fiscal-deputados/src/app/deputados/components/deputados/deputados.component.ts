import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoPageEditLiterals } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals } from '@po-ui/ng-templates';
import { DeputadoService } from 'src/app/shared/service/deputado.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit {

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

  public deputadosList = [
    {nome: 'Bolsonaro', partido: 'PSL', estado: 'RJ', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png'}
  ]

  constructor(
    private deputadoSerivce: DeputadoService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  onAdvancedSearch(filter: any) {

  }

  onQuickSearch(filter: any) {
    
  }
  

  showMore(filter: any) {

  }

  voltar() {
    this.router.navigate(['']);
  }
}
