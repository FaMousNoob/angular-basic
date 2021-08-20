import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  userInfo: User = {
    name: 'Ngô Bảo phương Tảo ',
    className: 'BOOTCAMP',
    age: 20,
    birthday: '2001/5/9',
  };

  handleSetAge(age: string) {
    this.userInfo.age = parseInt(age);
    console.log(this.userInfo.age);
  }

  constructor() {}

  ngOnInit(): void {}
}
