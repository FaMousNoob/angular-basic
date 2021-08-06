import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css'],
})
export class AttributesComponent implements OnInit {
  isColorText: boolean = true;

  status: string = 'hiển thị ';

  constructor() {}

  ngOnInit(): void {}
}
