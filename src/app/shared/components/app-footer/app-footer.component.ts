// This file contains the main class as well as the necessary
// decorators for creating the `AppFooter` component

/*
 * Angular 2 decorators and services
 */
import { Component } from "angular2/core";

/*
 * App footer
 * Component
 */
@Component({
  selector: 'app-footer',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./app-footer.component.html'),
  // Load our main `Sass` file into our `AppFooter` component
  styleUrls: [require('!style!css!sass!./app-footer.component.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class AppFooter {
  logo = 'https://avatars1.githubusercontent.com/u/19742799?v=3&s=200';
  url = 'https://github.com/DrunkAndroid';

  constructor() {
  }
}
