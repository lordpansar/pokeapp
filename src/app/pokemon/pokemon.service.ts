import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<Pokemon> {
    let id = this.randomNumber();

    let response = this.http.get<Pokemon>(this.url + id).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    console.log(response);

    return response;
  }

  randomNumber(): number {
    return Math.floor(Math.random() * (150 - 1 + 1) + 1);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
