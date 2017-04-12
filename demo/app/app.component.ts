import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/cat" routerLinkActive="active">Cats</a>
      <h1>My App</h1>
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
