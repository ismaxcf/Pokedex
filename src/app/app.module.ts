import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { PokemonDisplayComponent } from "./pokemon-display/pokemon-display.component";
import { HttpClientModule } from "@angular/common/http";
import { PokedexComponent } from "./pokedex/pokedex.component";
import { TypeFilteredPipe } from "./list/type-filter.pipe";
import { PokemonMapComponent } from "./pokemon-map/pokemon-map.component";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "aboutUs", component: AboutUsComponent},
  { path: "pokedex", component: LandingpageComponent },
  { path: "pokedex/:name", component: LandingpageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandingpageComponent,
    PokemonDisplayComponent,
    PokedexComponent,
    TypeFilteredPipe,
    PokemonMapComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
