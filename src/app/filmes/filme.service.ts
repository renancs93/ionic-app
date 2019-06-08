import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  URL = ' http://www.omdbapi.com/';
  chaveAPI = '7e6e65ed';

  constructor(private http: HttpClient) { }

  //Chamada sincrona
  consultaFilmes(titulo: string) {
    this.http.get<any>(`
      ${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}
    `).subscribe(
      dados => {
        console.log(dados);
        console.log(`${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`);
      }
    );
  }

  //Chamada assincrona
  consultaFilmesAssincrono(titulo: string): Observable<any> {
    return this.http.get<any>(`
        ${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`)
        .pipe(map(results => results['Search']));
  }

  getFilmesById(id) {
    return this.http.get(`${this.URL}?i=${id}&plot=full&apikey=${this.chaveAPI}`);
  }

}
