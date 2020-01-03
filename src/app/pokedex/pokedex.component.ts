import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"]
})
export class PokedexComponent implements OnInit {
  mapPokemonName: string;
  constructor() {}

  ngOnInit() {}

  handlerPokemon(data) {
    console.log("data:");
    console.log(data);
    this.mapPokemonName = data;
    console.log("mapPokemonName:");
    console.log(this.mapPokemonName);
  }
}
