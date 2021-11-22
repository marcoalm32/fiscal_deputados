export class DeputadoDetalhes {
    cpf: string;
    dataFalecimento: string;
    dataNascimento: string;
    escolaridade: string;
    id: number;
    municipioNascimento: string;
    nomeCivil: string;
    redeSocial: string[];
    sexo: string;
    ufNascimento: string;
    ultimoStatus: UltimoStatusModel;
    uri: string;
    urlWebsite: string;
}

export class UltimoStatusModel {
    condicaoEleitoral: string;
    data: string;
    descricaoStatus: string;
    email: string;
    gabinete: GabineteModel;
    id: number;
    idLegislatura: number;
    nome: string;
    nomeEleitoral: string;
    siglaPartido: string;
    siglaUf: string;
    situacao: string;
    uri: string;
    uriPartido: string;
    urlFoto: string
}

export class GabineteModel {
    andar: string;
    email: string;
    nome: string;
    predio: string;
    sala: string;
    telefone: string
}