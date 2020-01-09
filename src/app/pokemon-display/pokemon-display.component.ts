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

  private pokemonName: string
  private pokemon: Object
  private pokemonphoto: Object
  private female: boolean
  private changeable: boolean = true
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    this.pokemonphoto = {
      link: '',
      name: '',
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonName = params.get('name')
      this.pokemonService.getPokemon(this.pokemonName).subscribe(data => {
        this.pokemon = data
        this.pokemonphoto['link'] = this.pokemon['sprites'].front_default
        this.pokemonphoto['name'] = 'front_default'
        this.changeable = true
        this.emitter.emit(this.pokemonName)

        this.pokemonService
          .getPokemonDescription(this.pokemon['species'].url)
          .subscribe(data => {
            let aux = data['flavor_text_entries']
            this.pokemon['description'] = aux.filter(
              x => x['language'].name === 'en'
            )[0].flavor_text
          })
      })
    })
  }

  ChangeSex(): void {
    if (this.changeable) {
      if (this.pokemonphoto['name'].split('_')[1] === 'default') {
        if (
          this.pokemon['sprites'][
            this.pokemonphoto['name'].split('_')[0].concat('_female')
          ]
        ) {
          this.pokemonphoto['name'] = this.pokemonphoto['name']
            .split('_')[0]
            .concat('_female')
          this.pokemonphoto['link'] = this.pokemon['sprites'][
            this.pokemonphoto['name']
          ]
        } else {
          alert('Photo not found')
        }
      } else {
        this.pokemonphoto['name'] = this.pokemonphoto['name']
          .split('_')[0]
          .concat('_default')
        this.pokemonphoto['link'] = this.pokemon['sprites'][
          this.pokemonphoto['name']
        ]
      }
    }
  }

  ChangePerspective(): void {
    if (this.changeable) {
      if (this.pokemonphoto['name'].split('_')[0] === 'front') {
        this.pokemonphoto['name'] = 'back_'.concat(
          this.pokemonphoto['name'].split('_')[1]
        )
        this.pokemonphoto['link'] = this.pokemon['sprites'][
          this.pokemonphoto['name']
        ]
      } else {
        this.pokemonphoto['name'] = 'front_'.concat(
          this.pokemonphoto['name'].split('_')[1]
        )
        this.pokemonphoto['link'] = this.pokemon['sprites'][
          this.pokemonphoto['name']
        ]
      }
    }
  }

  ChangeShiny(): void {
    if (this.changeable) {
      let nameArray = this.pokemonphoto['name'].split('_')
      if (nameArray[1] === 'female') {
        this.pokemonphoto['name'] = nameArray[0] + '_shiny_' + nameArray[1]
        this.pokemonphoto['link'] = this.pokemon['sprites'][
          this.pokemonphoto['name']
        ]
      } else {
        if (nameArray[1] === 'shiny') {
          this.pokemonphoto['name'] = nameArray[0] + '_default'
          this.pokemonphoto['link'] = this.pokemon['sprites'][
            this.pokemonphoto['name']
          ]
        } else {
          this.pokemonphoto['name'] = nameArray[0] + '_shiny'
          this.pokemonphoto['link'] = this.pokemon['sprites'][
            this.pokemonphoto['name']
          ]
        }
      }
    }
  }

  CloseDisplay(): void {
    if (confirm('Cerrar detalle del pokemon?')) {
      this.pokemon = undefined
      this.pokemonphoto = undefined
      this.pokemonName = undefined
      this.pokemonphoto = { link: '', name: '' }
      this.female = false
    }
  }

  Changeimg(): void {
    let result = this.pokemon['types'].map(x => x.type)
    result = result.map(x => x.name)
    if (result.indexOf('grass') !== -1) {
      if (this.changeable) {
        this.pokemonphoto['last'] = this.pokemonphoto['link']
        this.pokemonphoto['link'] =
          'https://vignette.wikia.nocookie.net/plantsvszombies/images/c/c6/Lanzagisantes.png/revision/latest?cb=20150324214507&path-prefix=es'
        this.changeable = false
      } else {
        this.pokemonphoto['link'] = this.pokemonphoto['last']
        this.changeable = true
      }
    }
  }
}
