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

  colors: string[] = ['bg-danger', 'bg-primary', 'bg-success'];

  memerList: any[] = [
    {
      name: 'heheboi',
      img: 'https://www.meme-arsenal.com/memes/2c6b06c061099f97f281c8b8d097c26f.jpg',
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

  handleColor(color: string) {
    switch (color) {
      case 'red':
        this.trueColor = this.colors[0];
        break;
      case 'blue':
        this.trueColor = this.colors[1];
        break;
      case 'green':
        this.trueColor = this.colors[2];
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
