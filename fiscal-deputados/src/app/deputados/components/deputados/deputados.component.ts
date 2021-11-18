import { Component, OnInit } from '@angular/core';
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
    items: [{label: 'Gerenciar Deputados'}]
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

  constructor(
    private deputadoSerivce: DeputadoService
  ) { }


  ngOnInit(): void {
  }

  onAdvancedSearch(filter: any) {

  }

  onQuickSearch(filter: any) {
    
  }
  

  showMore(filter: any) {

  }
}
