import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  pokemon: string
  constructor() {
    this.pokemon = 'houndoom'
  }

  ngOnInit() {}
}
