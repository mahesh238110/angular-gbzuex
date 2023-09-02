import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  // @Input() cData: String;

  data: string = 'This is for View child';
  // @Output() custom = new EventEmitter();
  // text: string = 'This is to send data to parent';

  // data = 'This is send data for Template reference 1';
  // title = 'This is for Template title reference';
  ngOnInit() {}

  // toParent() {
  //   this.custom.emit(this.text);
  // }
  passtoParent() {
    return this.data;
  }
}
