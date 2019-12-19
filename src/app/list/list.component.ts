import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons=undefined
  constructor(private PokemonService:PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokemons=this.PokemonService.getPokemon()
    console.log(this.pokemons)

  }

}
