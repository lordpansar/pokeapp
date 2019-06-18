import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams } from "@angular/common/http";
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): void {
    let number = this.randomNumber();

    console.log(number);

    let response = this.http.get<Pokemon>(this.url+number).subscribe(console.log);
    console.log(response);
  }

  randomNumber(): number {
    return Math.floor(Math.random() * (150 - 1 + 1) + 1);
  }
}
