import { Observable } from "rxjs";
import { DeputadoDetalhes } from "src/app/deputados/model/deputado-detalhe.model";
import { DeputadoModel } from "src/app/deputados/model/deputado.model";
import { DepesasModel } from "src/app/despesas/model/despesas.model";
import { RespostaModel } from "./resposta.model";

export interface DeputadoServiceContract {
    pegarDespesas(idDeputado: string, parametros: any): Observable<RespostaModel<DepesasModel>>;
    
    pegarTodosDeputados(parametros: any) : Observable<RespostaModel<DeputadoModel[]>>;

    pegarDeputadoId(id: number) : Observable<RespostaModel<DeputadoDetalhes>>;
  }