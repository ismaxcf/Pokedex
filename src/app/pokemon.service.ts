import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }
  getPokemonName():Observable<Object>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
  }
  getPokemon(id):Observable<Object>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/"+id)
  }
  
  getPokemonDescription(url:string):Observable<Object>{
    return this.httpClient.get(url)
  }
  getPokemonType():Observable<Object>{
    return this.httpClient.get("https://pokeapi.co/api/v2/type")

  }
  getTypeFilteredPokemons(id):Observable<Object>{
    return this.httpClient.get("https://pokeapi.co/api/v2/type/"+id)
  }
}