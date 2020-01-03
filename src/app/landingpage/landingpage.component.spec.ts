<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingpageComponent } from './landingpage.component'

describe('LandingpageComponent', () => {
  let component: LandingpageComponent
  let fixture: ComponentFixture<LandingpageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingpageComponent],
    }).compileComponents()
  }))
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingpageComponent } from "./landingpage.component";

describe("LandingpageComponent", () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingpageComponent]
    }).compileComponents();
  }));
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageComponent)
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
