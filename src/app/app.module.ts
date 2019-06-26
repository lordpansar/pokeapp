import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RandomPokemonComponent } from './pokemon/randompokemon.component';
import { PageNotFoundComponent } from './shared/pagenotfound.component';

import { CapitalLetterPipe } from './shared/capital-letter.pipe';
import { DivideByTenPipe } from './shared/divide-by-ten.pipe';
import { NumberGuard } from './shared/number-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    RandomPokemonComponent,
    PageNotFoundComponent,
    CapitalLetterPipe,
    DivideByTenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/:id', canActivate: [NumberGuard], component: PokemonComponent },
      { path: 'random', component: RandomPokemonComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
