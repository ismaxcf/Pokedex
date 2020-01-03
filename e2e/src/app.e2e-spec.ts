<<<<<<< HEAD
import { AppPage } from './app.po'
import { browser, logging } from 'protractor'

describe('workspace-project App', () => {
  let page: AppPage
=======
import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  beforeEach(() => {
    page = new AppPage()
  })

<<<<<<< HEAD
  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('PokedexApp app is running!')
  })
=======
  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("PokedexApp app is running!");
  });
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
<<<<<<< HEAD
      .get(logging.Type.BROWSER)
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    )
  })
})
=======
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
