import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  mapPokemonName: string
  mapPokemonType: string
  listType: Array<string>
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.mapPokemonName = params.get('name')
      this.mapPokemonType = params.get('type')
    })
  }

  handlerPokemon(data) {
    this.mapPokemonName = data
  }

  typeChanged(event) {
    this.listType = event
  }
}
