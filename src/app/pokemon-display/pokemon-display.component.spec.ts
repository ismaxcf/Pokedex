<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemonDisplayComponent } from './pokemon-display.component'

describe('PokemonDisplayComponent', () => {
  let component: PokemonDisplayComponent
  let fixture: ComponentFixture<PokemonDisplayComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDisplayComponent],
    }).compileComponents()
  }))
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonDisplayComponent } from "./pokemon-display.component";

describe("PokemonDisplayComponent", () => {
  let component: PokemonDisplayComponent;
  let fixture: ComponentFixture<PokemonDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDisplayComponent]
    }).compileComponents();
  }));
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDisplayComponent)
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
