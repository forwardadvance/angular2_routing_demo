import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <header>
        <a routerLink="">Home</a>
        <a routerLink="cat">Cat</a>
      </header>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
  private name: string
  miowCount:number = 0;
  constructor() {
    this.name = 'Mikey the Cat'
  }
}
