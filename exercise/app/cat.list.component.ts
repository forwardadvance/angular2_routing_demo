import {Component, Input, Output, EventEmitter} from '@angular/core';
import { CatService } from './cat.service';

@Component({
    selector: 'catList',
    template: `
      <ul>
      <li *ngFor="let cat of cats">
        {{cat.name}}
      </li>
    </ul>
    `
})
export class CatListComponent {
  cats:Array<any>
  constructor(catService:CatService) {
    this.cats = catService.cats;
  }
}
