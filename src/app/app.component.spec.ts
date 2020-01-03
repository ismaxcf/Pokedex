<<<<<<< HEAD
import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
=======
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [AppComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'PokedexApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('PokedexApp')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'PokedexApp app is running!'
    )
  })
})
=======
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PokedexApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("PokedexApp");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain(
      "PokedexApp app is running!"
    );
  });
});
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
