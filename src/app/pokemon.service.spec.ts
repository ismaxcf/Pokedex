import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PokemonService } from './pokemon.service'

describe('PokemonService', () => {
  let component: PokemonService
  let fixture: ComponentFixture<PokemonService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonService)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  /* it('should create', () => {
    expect(component).toBeTruthy()
  }) */
})
