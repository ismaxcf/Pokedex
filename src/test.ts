// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
=======
<<<<<<< HEAD
import 'zone.js/dist/zone-testing'
import { getTestBed } from '@angular/core/testing'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'
=======
>>>>>>> 8563a5b9d6d5ab60f96a06d98d382547002360eb
import "zone.js/dist/zone-testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
<<<<<<< HEAD
=======
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
>>>>>>> 8563a5b9d6d5ab60f96a06d98d382547002360eb

declare const require: any

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)
// Then we find all the tests.
<<<<<<< HEAD
const context = require.context("./", true, /\.spec\.ts$/);
=======
<<<<<<< HEAD
const context = require.context('./', true, /\.spec\.ts$/)
=======
const context = require.context("./", true, /\.spec\.ts$/);
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
>>>>>>> 8563a5b9d6d5ab60f96a06d98d382547002360eb
// And load the modules.
context.keys().map(context)
