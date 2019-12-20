import { Component, OnInit } from '@angular/core';
import{PokemonService} from '../pokemon.service'
@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.scss']
})
export class PokemonDisplayComponent implements OnInit {
  pokemon : Object
  photoLink: String
  pokemons: Array<Object>
  constructor(private pokemonService : PokemonService) { 

  }

  ngOnInit() {
    console.log("ng Init")
    this.pokemonService.getPokemon("mewtwo").subscribe(data=>{
      this.pokemon=data
      console.log(this.pokemon)
      this.photoLink = this.pokemon['sprites'].front_default
    })
    this.pokemonService.getpokemonname().subscribe(data=>{
      this.pokemons=data['results'] 
     })
 
  }

  ChangeSex(){
    console.log("Changing...")
  }

  ChangePerspective(){
    console.log("Turn around")
  }

  ChangeShiny(){
    console.log("Change Shiny")
  }

}
