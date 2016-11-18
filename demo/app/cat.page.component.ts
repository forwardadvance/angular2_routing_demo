import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'catPage',
    template: `
      <h1>This is the cat page</h1>
      <p>All about cats</p>
    `
})
export class CatPageComponent {
  @Input() name:string;
  @Output() miow:EventEmitter<any> = new EventEmitter();

  constructor() {}
  handleClick() {
    this.miow.emit();
  }
}
