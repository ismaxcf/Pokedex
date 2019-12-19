import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const appRoutes: Routes = [
 { path: 'list', component:ListComponent},
 { path: '', redirectTo: 'list', pathMatch: 'full' },]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
