import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  private urlApi = 'https://dadosabertos.camara.leg.br/api/v2/deputados/';
  
  constructor() { }
}
