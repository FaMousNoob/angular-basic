import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //interpolation
  public brand: string = 'TiKi';

  //binding attribute
  public linkBrand: string = 'https://tiki.vn/';

  constructor() {}

  ngOnInit(): void {}
}
