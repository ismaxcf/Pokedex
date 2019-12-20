import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonMapComponent } from './pokemon-map/pokemon-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PokemonDisplayComponent,
    PokemonMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
