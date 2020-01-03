<<<<<<< HEAD
import { TestBed } from '@angular/core/testing'

import { PokemonService } from './pokemon.service'

describe('PokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService)
    expect(service).toBeTruthy()
  })
})
=======
import { TestBed } from "@angular/core/testing";

import { PokemonService } from "./pokemon.service";

describe("PokemonService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });
});
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
