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

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMapComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
