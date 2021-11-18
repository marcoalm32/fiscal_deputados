import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeputadosModule } from 'src/app/deputados/deputados.module';
import { RespostaModel } from 'src/app/deputados/model/resposta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  private urlApi = `${environment.urlApi}/deputados`;

  constructor(private http: HttpClient) { }

  pegarDeputados() : Observable<RespostaModel<DeputadosModule>> {
    return this.http.get<RespostaModel<DeputadosModule>>(this.urlApi);
  }
  
}
