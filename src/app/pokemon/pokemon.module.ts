import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { SharedModule } from '../shared/shared.module';


import { PokemonComponent } from './pokemon.component';
import { RandomPokemonComponent } from './randompokemon.component';

import { CapitalLetterPipe } from '../shared/capital-letter.pipe';
import { DivideByTenPipe } from '../shared/divide-by-ten.pipe';
import { NumberGuard } from '../shared/number-guard';



@NgModule({
  imports: [
    //SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/:id', canActivate: [NumberGuard], component: PokemonComponent },
      { path: 'random', component: RandomPokemonComponent },
    ])
  ],
  declarations: [
    PokemonComponent,
    RandomPokemonComponent,
    CapitalLetterPipe,
    DivideByTenPipe
  ]
})

export class PokemonModule { }
