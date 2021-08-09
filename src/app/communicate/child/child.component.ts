import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() user?: User;
  @Output() newSetAgeEvent = new EventEmitter();

  handleSetAge(age: string) {
    console.log(age);
    this.newSetAgeEvent.emit(age);
  }
  constructor() {}

  ngOnInit(): void {}
}
