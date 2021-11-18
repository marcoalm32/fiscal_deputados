import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  private urlApi = `${environment.urlApi}/deputados`;

  constructor() { }
}
