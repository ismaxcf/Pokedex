import {
  Component,
  OnInit
} from '@angular/core';
import {
  PokemonService
} from '../pokemon.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  pokemons
    pokemonTypes: Array < Object >
    pokemonsTypeFiltered = []
   filterByType : boolean

    constructor(private PokemonService: PokemonService, private route: ActivatedRoute) {
      this.filterByType=false
    }
   
  ngOnInit() {
    this.PokemonService.getPokemonType().subscribe(data => {
      this.pokemonTypes = data['results'].filter(x => x.name !== 'unknown').filter(x => x.name !== 'shadow')
    })
    this.PokemonService.getPokemonName().subscribe(data => {
      this.pokemons = data['results']
    })
    for (let i = 1; i <= 18; i++) {
      this.PokemonService.getTypeFilteredPokemons(i).subscribe(data => {
        let aux = data['pokemon']
        let typep = []
        let obj={type:data['name']}
        for (let i = 0; i < aux.length; i++) {
          typep.push(aux[i]['pokemon']['name'])
        }
        obj['pokemons']=typep
        this.pokemonsTypeFiltered.push(obj)
        console.log(this.pokemonsTypeFiltered)
      
      })
    }
  }
  filterType(filterVal: any) {
    if (filterVal == "0") {
      this.PokemonService.getPokemonName().subscribe(data => {
        this.pokemons = data['results']
      })
      console.log(filterVal)
      this.filterByType = false
    }
    else{
      this.pokemons=this.pokemonsTypeFiltered.filter(x=>x.type==filterVal)[0]['pokemons']
      console.log(filterVal)
      this.filterByType = true
        }
        console.log(this.pokemons)
        
    }
}


