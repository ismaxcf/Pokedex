import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import{PokemonService} from '../pokemon.service';
import{ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.scss']
})
export class PokemonDisplayComponent implements OnInit {
  @Output() mapPokemon = new EventEmitter<Object>()
  pokemonName:string
  pokemon : Object
  photo: Object
  female:boolean
  constructor(private pokemonService : PokemonService, private route:ActivatedRoute) { 
    this.photo = {link:'',name:''}
  }

  ngOnInit() {
      this.route.paramMap
        .subscribe((params:ParamMap)=>{
          console.log(params)
          this.pokemonName=params.get('name')
          this.pokemonService.getPokemon(this.pokemonName).subscribe(data=>{
            this.pokemon=data
          
            console.log(this.pokemon)
            this.photo['link']=this.pokemon['sprites'].front_default
            this.photo['name'] = 'front_default'

            this.mapPokemon.emit({
              name: this.pokemonName,
              photo: this.photo['link']
            })

             this.pokemonService.getPokemonDescription(this.pokemon['species'].url).subscribe(data=>{
               console.log(data['flavor_text_entries'])
               let aux=data['flavor_text_entries']
               this.pokemon['description']=aux.filter(x=>x['language'].name==="en")[0].flavor_text
               console.log( this.pokemon['description'])
            })
    
        })
    console.log("ng Init")    
  })
}

  ChangeSex(){
    if(this.photo['name'].split('_')[1]==='default'){
      console.log(this.photo['name'].split('_')[0].concat('_female'))
      if(this.pokemon['sprites'][this.photo['name'].split('_')[0].concat('_female')]){
        this.photo['name'] =  this.photo['name'].split('_')[0].concat('_female')
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      }else{
        alert('Photo not found')
      }

    }else{
        this.photo['name'] =  this.photo['name'].split('_')[0].concat('_default')
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
    }
  }

  ChangePerspective(){
    if(this.photo['name'].split('_')[0]==='front'){
      this.photo['name']='back_'.concat(this.photo['name'].split('_')[1])
      this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
    }else{
      this.photo['name']='front_'.concat(this.photo['name'].split('_')[1])
      this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
    }
  }

  ChangeShiny(){
    let nameArray = this.photo['name'].split('_')
    if(nameArray[1]==='female'){
      this.photo['name']=nameArray[0]+'_shiny_'+nameArray[1]
      this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
    }else{
      if(nameArray[1]==='shiny'){
        this.photo['name']=nameArray[0]+'_default'
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      }else{
        this.photo['name']=nameArray[0]+'_shiny'
        this.photo['link'] = this.pokemon['sprites'][this.photo['name']]
      }
      
    }
  }

  CloseDisplay(){
    if(confirm("Cerrar detalle del pokemon?")){
      this.pokemon = undefined
      this.photo = undefined
    }
  }

}
