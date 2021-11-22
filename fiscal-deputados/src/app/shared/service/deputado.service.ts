import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { DeputadosModule } from 'src/app/deputados/deputados.module';
import { DeputadoDetalhes } from 'src/app/deputados/model/deputado-detalhe.model';
import { DeputadoModel } from 'src/app/deputados/model/deputado.model';
import { RespostaModel } from 'src/app/shared/model/resposta.model';
import { environment } from 'src/environments/environment';
import { DeputadoServiceContract } from '../model/deputado-service.contract';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService implements DeputadoServiceContract {

  private urlApi = `${environment.urlApi}/deputados`;

  constructor(private http: HttpClient) { }

  pegarTodosDeputados(parametros: any): Observable<RespostaModel<DeputadoModel[]>> {
    return this.http.get<RespostaModel<DeputadoModel[]>>(this.urlApi, {params: parametros});
  }

  pegarDeputadoId(id: number): Observable<RespostaModel<DeputadoDetalhes>> {
    return this.http.get<RespostaModel<DeputadoDetalhes>>(`${this.urlApi}/${id}`);
  }
  
}
