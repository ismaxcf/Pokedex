import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  pokemons: Array<Object>;
  pokemonTypes: Array<Object>;
  pokemonsTypeFiltered: Array<Object>;
  filterByType: boolean;
  selectedPokemon: string;
  constructor(
    private PokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    this.selectedPokemon = "";
    this.filterByType = false;
    this.pokemonsTypeFiltered = [];
  }
  ngOnInit() {
    this.PokemonService.getpokemonname().subscribe(data => {
      this.pokemons = data["results"];
      this.route.paramMap.subscribe((params: ParamMap) => {
        if (params.get("name")) this.selectedPokemon = params.get("name");
      });
      console.log(this.pokemons);
    });

    this.PokemonService.getPokemonType().subscribe(information => {
      this.pokemonTypes = information["results"]
        .filter(x => x.name !== "unknown")
        .filter(x => x.name !== "shadow");
      console.log(this.pokemonTypes);

      this.pokemonTypes.forEach(type => {
        this.PokemonService.getTypeFilteredPokemons(type["name"]).subscribe(
          data => {
            let aux = data["pokemon"];
            let typep = [];
            let obj = { type: data["name"] };
            for (let i = 0; i < aux.length; i++) {
              typep.push(aux[i]["pokemon"]["name"]);
            }
            obj["pokemons"] = typep;
            this.pokemonsTypeFiltered.push(obj);
            console.log(this.pokemonsTypeFiltered);
          }
        );
      });
    });
  }

  filterType(filterVal: any) {
    console.log(this.pokemonsTypeFiltered);
    console.log(filterVal);
    if (filterVal == "0") {
      this.PokemonService.getpokemonname().subscribe(data => {
        this.pokemons = data["results"];
      });
      console.log(filterVal);
      this.filterByType = false;
    } else {
      console.log("something");
      console.log(this.pokemonsTypeFiltered);
      this.pokemons = this.pokemonsTypeFiltered.filter(
        x => x["type"] == filterVal
      )[0]["pokemons"];
      console.log(filterVal);
      this.filterByType = true;
    }
    console.log(this.pokemons);
  }

  removeType(filterVal: any) {
    console.log(this.pokemons);
    let aux = this.pokemonsTypeFiltered.filter(x => x["type"] == filterVal)[0][
      "pokemons"
    ];
    let pokemonListAux = [];
    console.log(aux);
    for (let i = 0; i <= this.pokemons.length; i++) {
      if (typeof this.pokemons[i] === "string") {
        if (aux.includes(this.pokemons[i])) {
          this.pokemons.splice(i, 1);
          i--;
        }
      } else {
        if (aux.includes(this.pokemons[i]["name"])) {
          this.pokemons.splice(i, 1);
          i--;
        }
      }
    }
    console.log(this.pokemons);
  }
}
