import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  mapPokemonName: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mapPokemonName = params.get('name')
    })
  }

  handlerPokemon(data) {
    console.log('data:')
    console.log(data)
    this.mapPokemonName = data
    console.log('mapPokemonName:')
    console.log(this.mapPokemonName)
  }
}
