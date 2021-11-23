import { userInfo } from "os";
import { DeputadoDetalhes } from "../model/deputado-detalhe.model";
import { DeputadoDetalheView } from "../model/deputadoDetalheView";

export const deputadosFactory = (deputado: DeputadoDetalhes): DeputadoDetalheView => {
     return {
         nome: deputado?.ultimoStatus.nome,
         dataNascimento: deputado?.dataNascimento,
         sexo: deputado?.sexo,
         email: deputado?.ultimoStatus.email,
         siglaPartido: deputado?.ultimoStatus.siglaPartido,
         id: deputado?.id,
         siglaUf: deputado?.ultimoStatus.siglaUf,
         urlWebsite: deputado?.urlWebsite
     }
}