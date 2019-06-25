import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
  }

  pokemon: Pokemon;

  getPokemonById(): void {

    let errorMessage = document.getElementById("error-message");
    let id = ((document.getElementById("txtNumber") as HTMLInputElement).value);

    if (+id > 0 && +id < 152) {
      this.pokemonService.getPokemonById(+id).subscribe(
        pokemon => {
          this.pokemon = pokemon;
        }
      );
      errorMessage.classList.add("hide");
      errorMessage.classList.remove("show");
    } else {
      errorMessage.classList.remove("hide");
      errorMessage.classList.add("show");
    }
  }
}
