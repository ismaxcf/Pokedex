// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/dist/zone-testing'
import { getTestBed } from '@angular/core/testing'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'
=======
import "zone.js/dist/zone-testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0

declare const require: any

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)
// Then we find all the tests.
<<<<<<< HEAD
const context = require.context('./', true, /\.spec\.ts$/)
=======
const context = require.context("./", true, /\.spec\.ts$/);
>>>>>>> 726fc73ba7c908f0992f19db3bb6fcf943e8e5d0
// And load the modules.
context.keys().map(context)
