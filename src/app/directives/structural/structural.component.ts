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

  memerList: any[] = [
    {
      name: 'heheboi',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4a38vEA_E1gpCvjYUWpMgEvrJ7pcU5xzaJzDORSgvNqvB9nBQzCd6o1XnsY2oPN4874&usqp=CAU',
    },
    {
      name: 'white guy',
      img: 'https://i.kym-cdn.com/entries/icons/facebook/000/022/255/tumblr_inline_o58r6dmSfe1suaed2_500.jpg',
    },
    {
      name: 'gay guy',
      img: 'https://i.ytimg.com/vi/_AZDaW3GLQw/hqdefault.jpg',
    },
    {
      name: 'crying nigga',
      img: 'https://static.wikia.nocookie.net/378a5719-5ecc-454c-9832-2e5e9832401e',
    },
  ];
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

  constructor() {}

  ngOnInit(): void {}
}
