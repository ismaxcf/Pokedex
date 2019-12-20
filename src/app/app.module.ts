import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListComponent } from './list/list.component';
=======
>>>>>>> 737ec6c95fc4f354e4d59f70b0d117620d850252
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
 { path: 'pokedex', component:ListComponent},
 {path:'pokedex/:name',component:PokemonDisplayComponent},
 { path: '', redirectTo: '/pokedex', pathMatch: 'full' },]
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListComponent,
=======
>>>>>>> 737ec6c95fc4f354e4d59f70b0d117620d850252
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
