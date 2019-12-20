import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }
  
  pokemon1 = {name: "Pikachu"}
  pokemon2 = {name: "Raichu"}
  pokemon3 = {name: "Pichu"}
  pokemon4 = {name: "Ludicolo"}
  pokemon5 = {name: "Eevee"}
  pokemon6 = {name: "Entei"}
  pokemon7 = {name: "Charmander"}
  pokemonList = [this.pokemon1, this.pokemon2, this.pokemon3, this.pokemon4, this.pokemon5, this.pokemon6, this.pokemon7]

  getPokemonList(){
    return this.pokemonList}
 
  getpokemonname():Observable<Object>{

    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?limit=800")

  }
  getPokemon(id):Observable<Object>{
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon/"+id)
  }
}

