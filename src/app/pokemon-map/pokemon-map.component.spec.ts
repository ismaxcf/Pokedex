<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonMapComponent } from './pokemon-map.component'

describe('PokemonMapComponent', () => {
  let component: PokemonMapComponent
  let fixture: ComponentFixture<PokemonMapComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMapComponent],
    }).compileComponents()
  }))
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonMapComponent } from "./pokemon-map.component";

describe("PokemonMapComponent", () => {
  let component: PokemonMapComponent;
  let fixture: ComponentFixture<PokemonMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMapComponent]
    }).compileComponents();
  }));
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMapComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

<<<<<<< HEAD
  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
=======
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
