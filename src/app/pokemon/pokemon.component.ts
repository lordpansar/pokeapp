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

    this.showCrazyBtn();
  }

  toggleCrazyShit(): void {
    let btn = document.getElementById('crazy-btn');
    let picture = document.getElementById('picture');
    let isSpinning = document.getElementById('picture').classList.contains('spinning');

    this.toggleSpinning(picture, isSpinning);
    this.toggleFlashing(isSpinning);
    this.toggleMovement(isSpinning, picture);
    this.shuffleStats(isSpinning);

    btn.innerText = 'Stop this crazy shit D:';

    if (isSpinning) {
      btn.innerText = 'Make shit crazy';
    }
  }

  toggleSpinning(picture: any, isSpinning: boolean): void {

    if(isSpinning) {
      picture.classList.remove('spinning');
    } else {
      picture.classList.add('spinning');
    }
  }

  toggleFlashing(isSpinning: boolean): void {

    let body = document.getElementsByTagName("BODY")[0];

    let animation = body.animate([
        { backgroundColor: '#ffffff' },
        { backgroundColor: '#4286f4' },
        { backgroundColor: '#42f448' },
        { backgroundColor: '#FF339C' },
        { backgroundColor: '#f4f141' },
        { backgroundColor: '#f47641' },
        { backgroundColor: '#d6d3d1' }
      ],
        { duration: 600, iterations: Infinity }
    )

    animation.pause();

    if (!isSpinning) {
      animation.play(); 
    } else {
      animation.cancel;
    }
  }

  toggleMovement(isSpinning: boolean, picture: any): void {
  showCrazyBtn(): void {
    let crazyBtn = document.getElementById('crazy-btn');
    crazyBtn.style.visibility = 'visible';
  }
}
