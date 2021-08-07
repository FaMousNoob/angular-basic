import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  isShow: boolean = true;
  output: string = '';
  replaceText: string = 'this is a replace text';

  month: number = 1;
  trueColor: string = 'bg-danger';

  switching() {
    this.isShow = !this.isShow;
  }

  changeMonth() {
    if (this.month < 4) {
      this.month += 1;
    } else {
      this.month = 1;
    }
  }

  handleColor(color: string) {
    switch (color) {
      case 'red':
        this.trueColor = 'bg-danger';
        break;
      case 'blue':
        this.trueColor = 'bg-primary';
        break;
      case 'green':
        this.trueColor = 'bg-success';
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
