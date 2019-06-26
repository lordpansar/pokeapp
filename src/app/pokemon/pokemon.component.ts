import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,  private pokemonService: PokemonService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPokemonById(id);
    }
  }

  pokemon: Pokemon;

  getId(): void {
    let id = ((document.getElementById("txtNumber") as HTMLInputElement).value);

    this.getPokemonById(+id);
  }

  getPokemonById(id: number): void {

    let errorMessage = document.getElementById("error-message");

    if (!isNaN(+id) && +id > 0 && +id < 152) {
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
