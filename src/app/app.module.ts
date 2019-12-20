import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { LandingpageComponent } from '../app/landingpage/landingpage.component';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
 { path: 'pokedex', component:ListComponent},
 {path:'pokedex/:name',component:PokemonDisplayComponent},
 { path: '', redirectTo: '/pokedex', pathMatch: 'full' },]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandingpageComponent,
    PokemonDisplayComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
