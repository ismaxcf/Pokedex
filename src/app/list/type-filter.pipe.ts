import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'nameFilter'
})
export class TypeFilteredPipe implements PipeTransform{
    transform(pokemons,searchTerm){
        if(pokemons && !searchTerm){
             console.log(searchTerm)
            return pokemons
        }
        console.log(pokemons.filter(pokemon=>pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1))
        return pokemons.filter(pokemon=>pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase(),0))
    }
}