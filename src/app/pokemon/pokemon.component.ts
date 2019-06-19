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

  getRandomPokemon(): void {
    this.pokemonService.getRandomPokemon().subscribe(
      pokemon => {
        this.pokemon = pokemon;
      }
    );
  }
