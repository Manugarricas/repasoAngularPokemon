import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "http://localhost:3000/pokemons?_limit=9"
  constructor(private http: HttpClient) { }

  getPokemons():Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  getPokemonById(id:number):Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}&id=${id}`);
  }

}
