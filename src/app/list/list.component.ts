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
  constructor(private PokemonService:PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PokemonService.getpokemonname().subscribe(data=>{
      this.pokemons=data['results']
    })
    
  }

}
