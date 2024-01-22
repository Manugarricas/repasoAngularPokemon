import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {}

  pokemons:Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons) => {
        console.log(pokemons)
        this.pokemons = pokemons
      }
    })
  }

}
