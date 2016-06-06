// ```
// app.ts
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// app.ts may be freely distributed under the MIT license
// ```
import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
import { AppState } from "./app.service";
import { RouterActive } from "./shared/directives/router-active/router-active.directive";
import { NgFor } from "@angular/common";
import { Todo } from "./todo/todo.component";
import { Home } from "./home";
import { Toolbar } from "./shared/components/toolbar/toolbar.component";
import { AppFooter } from "./shared/components/app-footer/app-footer.component";

@Component({
  selector: 'app',
  providers: [],
  directives: [Todo, NgFor, RouterActive, Toolbar, AppFooter],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: require('./app.component.html')
})
@RouteConfig([
  {path: '/', name: 'Index', component: Home, useAsDefault: true},
  {path: '/todo', component: Todo, name: 'Todo'},
  // Async load a component using Webpack's require with
  // es6-promise-loader and webpack `require`
  {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')}
])
export class App implements OnInit {
  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState) {
  }

  // Fire off upon initialization
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
