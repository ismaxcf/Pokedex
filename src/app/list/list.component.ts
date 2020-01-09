import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { PokemonService } from '../pokemon.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() listEmitter = new EventEmitter<any>()
  private pokemonList: Array<Object>
  private pokemonTypes: Array<Object>
  private pokemonsTypeFiltered: Array<Object>
  private filterByType: boolean
  private selectedPokemon: string
  private selectedtype: string
  private pokemonsForMap: Array<string>
  constructor(
    private PokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selectedPokemon = ''
    this.filterByType = false
    this.pokemonsTypeFiltered = []
    this.selectedtype = 'All'
    this.pokemonsForMap = []
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('name')) this.selectedPokemon = params.get('name')
      if (params.get('type')) {
        this.selectedtype = params.get('type')
        if (this.selectedtype === 'All' || !this.selectedtype) {
          this.PokemonService.getpokemonname().subscribe(data => {
            this.pokemonList = data['results']
            this.pokemonsForMap = []
          })
        }
      }
      this.PokemonService.getPokemonType().subscribe(information => {
        this.pokemonTypes = information['results']
          .filter(x => x.name !== 'unknown')
          .filter(x => x.name !== 'shadow')

        this.pokemonTypes.forEach(type => {
          this.PokemonService.getTypeFilteredPokemons(type['name']).subscribe(
            data => {
              let aux = data['pokemon']
              let pokemonnames = []
              let pokemonoftype = {
                type: data['name'],
              }
              for (let i = 0; i < aux.length; i++) {
                pokemonnames.push(aux[i]['pokemon']['name'])
              }
              pokemonoftype['pokemons'] = pokemonnames
              this.pokemonsTypeFiltered.push(pokemonoftype)
              if (this.selectedtype === data['name']) {
                this.pokemonList = pokemonnames
                this.pokemonsForMap = pokemonnames
                this.listEmitter.emit(this.pokemonsForMap)
                this.filterByType = true
              }
            }
          )
        })
      })
    })
  }

  filterType(filterVal: any): void {
    this.router.navigateByUrl('/pokedex/' + filterVal)
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  removeType(filterVal: any): void {
    let aux = this.pokemonsTypeFiltered.filter(x => x['type'] == filterVal)[0][
      'pokemons'
    ]
    let pokemonListAux = []
    for (let i = 0; i <= this.pokemonList.length; i++) {
      if (typeof this.pokemonList[i] === 'string') {
        if (aux.includes(this.pokemonList[i])) {
          this.pokemonList.splice(i, 1)
          i--
        }
      } else {
        if (aux.includes(this.pokemonList[i]['name'])) {
          this.pokemonList.splice(i, 1)
          i--
        }
      }
    }
  }
}
