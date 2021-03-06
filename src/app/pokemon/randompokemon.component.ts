import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './randompokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class RandomPokemonComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
    this.getRandomPokemon();
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

  toggleCrazyStuff(): void {
    let btn = document.getElementById('crazy-btn');
    let picture = document.getElementById('picture');
    let isSpinning = document.getElementById('picture').classList.contains('spinning');

    let originalText = 'Make stuff crazy';
    let crazyText = 'Stop this crazy stuff D:';

    this.toggleSpinning(picture, isSpinning);
    this.toggleFlashing(isSpinning);
    this.toggleMovement(isSpinning, picture);

    btn.innerText = crazyText;

    if (isSpinning) {
      btn.innerText = originalText;
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

    let animation = picture.animate([
      { marginTop: '0px' },
      { marginTop: this.pokemonService.getRandomNumber() + 'px' },
      { marginTop: this.pokemonService.getRandomNumber() + 'px' },
      { marginTop: this.pokemonService.getRandomNumber() + 'px' }
    ],
      { duration: 400, iterations: 10 }
    )

    animation.pause();

    if (!isSpinning) {
      animation.play();
    } else {
      animation.cancel;
      picture.style.marginLeft = '0px';
      console.log(picture.style.marginLeft);
    }
  }

  showCrazyBtn(): void {
    let crazyBtn = document.getElementById('crazy-btn');
    crazyBtn.style.visibility = 'visible';
  }
}
