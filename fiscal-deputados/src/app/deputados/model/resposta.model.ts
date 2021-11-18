import { LinksModel } from "./links.model";

export interface RespostaModel<Dados> {
    dados: Dados[];
    link: LinksModel[];
}