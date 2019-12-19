import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
constructor() { }
getPokemon() {
let pokemonList=[
    {name:'Pikachu'},
    {name:'Raichu'},
    {name:'Pichu'},
    {name:'Ludicolo'},
    {name:'Eevee'},
    {name:'Entei'},
    {name:'Charmander'},
]
console.log(pokemonList)
return pokemonList
}
  
}
  




