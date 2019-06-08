import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  public marca;
  // http://fipeapi.appspot.com/api/1/[tipo]/[acao]/[parametros].json
  URL = 'http://fipeapi.appspot.com/api/1';

  tipo;
  key;
  modelo
  id;

  constructor(private http: HttpClient) { }

  consultaMarcas(tipo: string): Observable<any> {
    return this.http.get<any>(`http://fipeapi.appspot.com/api/1/${tipo}/marcas.json`);
  }

  consultaVeiculosPorMarca(tipo: string, keyTipo: string): Observable<any> {
    const urlQuery = `http://fipeapi.appspot.com/api/1/${tipo}/veiculos/${encodeURI(keyTipo)}.json`;
    console.log(urlQuery);
    return this.http.get<any>(urlQuery);
  }

  consultaVeiculosPorModelo(tipo: string, keyTipo: string, keyModelo: string): Observable<any> {
    // Query string alterada de 'veiculos' para 'veiculo'
    const urlQuery = `http://fipeapi.appspot.com/api/1/${tipo}/veiculo/${encodeURI(keyTipo)}/${encodeURI(keyModelo)}.json`;
    console.log(urlQuery);
    return this.http.get<any>(urlQuery);
  }

  consultaVeiculoFichaDetalhada(tipo: string, keyTipo: string, keyModelo: string, keyVeiculo): Observable<any> {
    // Query string alterada de 'veiculos' para 'veiculo'
    const urlQuery = `http://fipeapi.appspot.com/api/1/${tipo}/veiculo/${encodeURI(keyTipo)}/${encodeURI(keyModelo)}/${encodeURI(keyVeiculo)}.json`;
    console.log(urlQuery);
    return this.http.get<any>(urlQuery);
  }

}
