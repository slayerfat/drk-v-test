//# Global Directives
//
//** These `directives` are available in any template **

import { PLATFORM_DIRECTIVES } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { MATERIAL_DIRECTIVES } from "./angular2-material2";

// Angular 2 Router

// Angular 2 Material 2
//
// TODO(datatypevoid): replace with @angular2-material/all

// APPLICATION_DIRECTIVES
//
// directives that are global through out the application
export const APPLICATION_DIRECTIVES = [

  ...ROUTER_DIRECTIVES,
  ...MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [

  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES}
];
