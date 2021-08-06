import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  isShow: boolean = true;
  output: string = '';

  switching() {
    this.isShow = !this.isShow;
  }

  constructor() {}

  ngOnInit(): void {}
}
