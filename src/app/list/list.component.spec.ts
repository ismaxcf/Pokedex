<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListComponent } from './list.component'

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents()
  }))
=======
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    }).compileComponents();
  }));
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent)
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
