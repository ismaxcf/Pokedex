<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PokedexComponent } from './pokedex.component'

describe('PokedexComponent', () => {
  let component: PokedexComponent
  let fixture: ComponentFixture<PokedexComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexComponent],
    }).compileComponents()
  }))
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokedexComponent } from "./pokedex.component";

describe("PokedexComponent", () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexComponent]
    }).compileComponents();
  }));
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent)
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
