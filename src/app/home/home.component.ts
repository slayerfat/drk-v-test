import { Component } from "@angular/core";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [require('!style!css!sass!./home.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.component.html')
})
export class Home {
  postDefaults = {
    subtitle: 'labore et dolore magna aliqua.',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: {
      square: {
        src: 'http://placehold.it/768',
        height: 768
      },
      rectangle: {
        src: 'http://placehold.it/768x256',
        height: 256
      }
    },
    user: {
      name: 'ayy lmao',
      bio: 'consectetur adipiscing elit.',
      avatar: 'http://placehold.it/96'
    }
  };

  posts: Object[] = [
    {title: 'First element title'},
    {title: 'Second element title'},
    {title: 'Third element title'},
    {title: 'Fourth element title'}
  ];

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}
  ];

  dogs: Object[] = [
    {name: 'Porter', human: 'Kara'},
    {name: 'Mal', human: 'Jeremy'},
    {name: 'Koby', human: 'Igor'},
    {name: 'Razzle', human: 'Ward'},
    {name: 'Molly', human: 'Rob'},
    {name: 'Husi', human: 'Matias'}
  ];

  fixedCols: number = 4;
  fixedRowHeight: number = 100;
  ratioGutter: number = 1;
  fitListHeight: string = '400px';
  ratio: string = '4:1';
  date: any;

  addTileCols() {
    this.tiles[2].cols++;
  }

  constructor() {
    this.date = new Date().toDateString();
  }
}
