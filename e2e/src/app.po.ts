<<<<<<< HEAD
import { browser, by, element } from "protractor";
=======
<<<<<<< HEAD
import { browser, by, element } from 'protractor'
=======
import { browser, by, element } from "protractor";
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
>>>>>>> 8563a5b9d6d5ab60f96a06d98d382547002360eb

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>
  }

  getTitleText() {
<<<<<<< HEAD
    return element(by.css("app-root .content span")).getText() as Promise<
      string
    >;
=======
<<<<<<< HEAD
    return element(by.css('app-root .content span')).getText() as Promise<
      string
    >
=======
    return element(by.css("app-root .content span")).getText() as Promise<
      string
    >;
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
>>>>>>> 8563a5b9d6d5ab60f96a06d98d382547002360eb
  }
}
