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
  private name: string
  private type: string

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let options = {
      attributionControl: false,
      minZoom: 0.5,
      maxBoundsViscosity: 0.8,
    }
    var myMap = L.map('myMap', options).setView([40.425941, -3.56547], 0.8)
    var Esri_WorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      }
    )
    Esri_WorldImagery.addTo(myMap)
    myMap.setMaxBounds(myMap.getBounds())
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name')
      this.type = params.get('type')
      if (this.name) {
        this.pokemonService.getPokemon(this.name).subscribe(data => {
          var pokeMarker = L.icon({
            iconUrl: data['sprites'].front_default,
            iconSize: [80, 90],
          })
          myMap.remove()
          myMap = L.map('myMap', options).setView([40.425941, -3.56547], 0.8)
          Esri_WorldImagery.addTo(myMap)
          myMap.setMaxBounds(myMap.getBounds())
          L.marker(this.getRandomLatLng(myMap), { icon: pokeMarker })
            .addTo(myMap)
            .bindPopup(this.name)
        })
      } else if (this.type !== 'All' && this.listType.length !== 0) {
        setTimeout(() => {
          for (let i = 0; i < this.listType.length; i++) {
            this.pokemonService.getPokemon(this.listType[i]).subscribe(data => {
              var pokeMarker = L.icon({
                iconUrl: data['sprites'].front_default,
                iconSize: [80, 90],
              })
              L.marker(this.getRandomLatLng(myMap), { icon: pokeMarker })
                .addTo(myMap)
                .bindPopup(this.listType[i])
            })
          }
        }, 500)
      }
    })
  }

  getRandomLatLng(map) {
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
}
