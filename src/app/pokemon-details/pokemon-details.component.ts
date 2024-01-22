import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html'
})
export class PokemonDetailsComponent implements OnInit {

  @Input("id") id!: number;

  constructor(private pokemonService:PokemonService) {}

  pokemon!:Pokemon;

  ngOnInit(): void {
    this.pokemonService.getPokemonById(this.id).subscribe({
      next: (pokemon) => console.log(pokemon)
    })
  }

}
