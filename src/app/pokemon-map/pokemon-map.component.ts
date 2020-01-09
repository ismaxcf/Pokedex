import { Component, OnInit, Input } from '@angular/core'
import * as L from 'leaflet'
import { PokemonService } from '../pokemon.service'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-pokemon-map',
  templateUrl: './pokemon-map.component.html',
  styleUrls: ['./pokemon-map.component.scss'],
})
export class PokemonMapComponent implements OnInit {
  @Input() listType: Array<string>
  private pokemonname: string
  private pokemontype: string
  private pokeMarker: L.Icon
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    this.pokeMarker = L.icon({
      iconUrl: '',
      iconSize: [80, 90],
    })
  }

  ngOnInit() {
    let pokemonMap = this.createmap()
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonname = params.get('name')
      this.pokemontype = params.get('type')
      if (this.pokemonname) {
        this.pokemonService.getPokemon(this.pokemonname).subscribe(data => {
          this.pokeMarker.options.iconUrl = data['sprites'].front_default
          pokemonMap.remove()
          pokemonMap = this.createmap()
          L.marker(this.getRandomLatLng(pokemonMap), { icon: this.pokeMarker })
            .addTo(pokemonMap)
            .bindPopup(this.pokemonname)
        })
      } else if (this.pokemontype !== 'All' && this.listType.length !== 0) {
        setTimeout(() => {
          for (let i = 0; i < this.listType.length; i++) {
            this.pokemonService.getPokemon(this.listType[i]).subscribe(data => {
              this.pokeMarker.options.iconUrl = data['sprites'].front_default
              L.marker(this.getRandomLatLng(pokemonMap), {
                icon: this.pokeMarker,
              })
                .addTo(pokemonMap)
                .bindPopup(this.listType[i])
            })
          }
        }, 500)
      }
    })
  }

  getRandomLatLng(map): L.LatLng {
    var bounds = map.getBounds(),
      southWest = bounds.getSouthWest(),
      northEast = bounds.getNorthEast(),
      lngSpan = northEast.lng - southWest.lng,
      latSpan = northEast.lat - southWest.lat
    return new L.LatLng(
      southWest.lat + latSpan * Math.random(),
      southWest.lng + lngSpan * Math.random()
    )
  }

  createmap(): any {
    let options = {
      attributionControl: false,
      minZoom: 0.5,
      maxBoundsViscosity: 0.8,
    }
    let pokemap = L.map('myMap', options).setView([40.425941, -3.56547], 0.8)
    let Esri_WorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      }
    )
    Esri_WorldImagery.addTo(pokemap)
    pokemap.setMaxBounds(pokemap.getBounds())
    return pokemap
  }
}
