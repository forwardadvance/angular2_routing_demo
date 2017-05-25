import { ActivatedRoute } from '@angular/router';
// private route: ActivatedRoute, 
// this.route.params.subscribe

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'catPage',
    template: `
      <h1>This is the cat page</h1>
      <p>All about cats {{catName}}</p>
    `
})
export class CatPageComponent {
  @Input() name:string;
  @Output() miow:EventEmitter<any> = new EventEmitter();
  catName:string

  constructor( route: ActivatedRoute) {
    route.params.subscribe((params) => this.catName = params['id'])
  }

  handleClick() {
    this.miow.emit();
  }
}
