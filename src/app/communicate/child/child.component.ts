import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() user: any;
  @Output() newSetAgeEvent = new EventEmitter();
  handleSetAge(age: string) {
    this.newSetAgeEvent.emit(age);
  }

  // setAge(age: string) {
  //   this.user.age = parseInt(age);
  // }
  constructor() {}

  ngOnInit(): void {}
}
