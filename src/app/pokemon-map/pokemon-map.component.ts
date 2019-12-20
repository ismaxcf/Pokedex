import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-pokemon-map',
  templateUrl: './pokemon-map.component.html',
  styleUrls: ['./pokemon-map.component.scss']
})
export class PokemonMapComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    let options = {attributionControl: false};
    var myMap = L.map('myMap',options).setView([40.425941, -3.565470], 6);
    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    Esri_WorldImagery.addTo(myMap)
    let marker = L.marker([40.425941, -3.565470]).bindPopup('COSLADA')
    marker.addTo(myMap)
  }
}
