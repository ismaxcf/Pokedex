import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons : Array<Object>
  pokemonTypes
  constructor(private PokemonService:PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PokemonService.getpokemonname().subscribe(data=>{
      this.pokemons=data['results']
      console.log(this.pokemons)
    })
    this.PokemonService.getPokemonType().subscribe(information =>{
      this.pokemonTypes = information['results'].filter(x=>x.name!== "unknown").filter(x=>x.name!== "shadow")
      console.log(this.pokemonTypes)
    })
    
  }

}
