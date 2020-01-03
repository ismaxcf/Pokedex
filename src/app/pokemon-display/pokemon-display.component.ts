import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { PokemonService } from '../pokemon.service'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.scss'],
})
export class PokemonDisplayComponent implements OnInit {
  @Output() emitter = new EventEmitter<string>()

  pokemonName: string
  pokemon: Object
  photo: Object
  female: boolean
  changeable: boolean = true
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    this.photo = {
      link: '',
      name: '',
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonName = params.get('name')
      this.pokemonService.getPokemon(this.pokemonName).subscribe(data => {
        this.pokemon = data
        this.photo['link'] = this.pokemon['sprites'].front_default
        this.photo['name'] = 'front_default'

        this.emitter.emit(this.pokemonName)

        this.pokemonService
          .getPokemonDescription(this.pokemon['species'].url)
          .subscribe(data => {
            console.log(data['flavor_text_entries'])
            let aux = data['flavor_text_entries']
            this.pokemon['description'] = aux.filter(
              x => x['language'].name === 'en'
            )[0].flavor_text
            console.log(this.pokemon['description'])
          })
      })
      console.log('ng Init')
    })
  }

  ChangeSex() {
    if (this.changeable) {
      if (this.photo['name'].split('_')[1] === 'default') {
        console.log(this.photo['name'].split('_')[0].concat('_female'))
        if (
          this.pokemon['sprites'][
            this.photo['name'].split('_')[0].concat('_female')
          ]
        ) {
          this.photo['name'] = this.photo['name']
            .split('_')[0]
            .concat('_female')
          this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
        } else {
          alert('Photo not found')
        }
      } else {
        this.photo['name'] = this.photo['name'].split('_')[0].concat('_default')
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      }
    }
  }

  ChangePerspective() {
    if (this.changeable) {
      if (this.photo['name'].split('_')[0] === 'front') {
        this.photo['name'] = 'back_'.concat(this.photo['name'].split('_')[1])
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      } else {
        this.photo['name'] = 'front_'.concat(this.photo['name'].split('_')[1])
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      }
    }
  }

  ChangeShiny() {
    if (this.changeable) {
      let nameArray = this.photo['name'].split('_')
      if (nameArray[1] === 'female') {
        this.photo['name'] = nameArray[0] + '_shiny_' + nameArray[1]
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      } else {
        if (nameArray[1] === 'shiny') {
          this.photo['name'] = nameArray[0] + '_default'
          this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
        } else {
          this.photo['name'] = nameArray[0] + '_shiny'
          this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
        }
      }
    }
  }

  CloseDisplay() {
    if (confirm('Cerrar detalle del pokemon?')) {
      this.pokemon = undefined
      this.photo = undefined
      this.pokemonName = undefined
      this.photo = { link: '', name: '' }
      this.female = false
    }
  }

  Changeimg() {
    let result = this.pokemon['types'].map(x => x.type)
    result = result.map(x => x.name)
    if (result.indexOf('grass') !== -1) {
      if (this.changeable) {
        this.photo['last'] = this.photo['link']
        this.photo['link'] =
          'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/c6/Lanzagisantes.png/revision/latest?cb=20150324214507&path-prefix=es'
        this.changeable = false
      } else {
        this.photo['link'] = this.photo['last']
        this.changeable = true
      }
    }
  }
}
