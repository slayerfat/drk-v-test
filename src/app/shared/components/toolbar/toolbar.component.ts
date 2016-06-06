import { Component } from "angular2/core";

@Component({
  selector: 'toolbar',
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./toolbar.component.html'),
  // Load our main `Sass` file into our `Toolbar` component
  styleUrls: [require('!style!css!sass!./toolbar.component.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Toolbar {
  name = 'DrunkAndroid.com Test 2: Vulgar';

  constructor() {
  }
}
