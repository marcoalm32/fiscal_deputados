import { Observable } from "rxjs";
import { DeputadoModel } from "src/app/deputados/model/deputado.model";
import { RespostaModel } from "./resposta.model";

export interface DeputadoServiceContract {
    //pegarDespesas(idDeputado: string, parametros: any): Observable<RespostaModel<DepesasModel>>;
    lerDeputados(parametros: any) : Observable<RespostaModel<DeputadoModel>>;
  }