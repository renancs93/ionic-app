import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  consultaPessoasAssincrono(): Observable<any> {
    return this.http.get<any>(`${this.URL}people/`).pipe(map(results => results['results']));
  }

}
