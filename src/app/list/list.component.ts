import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons : Array<Object>
  selectedPokemon : string
  constructor(private PokemonService:PokemonService, private route: ActivatedRoute) {
    this.selectedPokemon=''
   }

  ngOnInit() {
    this.PokemonService.getpokemonname().subscribe(data=>{
      this.pokemons=data['results']
      this.route.paramMap
        .subscribe((params:ParamMap)=>{
          if(params.get('name')) this.selectedPokemon = params.get('name')
        })
    })
    
  }

}
