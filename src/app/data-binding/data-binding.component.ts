import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  name: string = 'Ngô Bảo Phương Tảo';
  description: string = 'god of destruction';
  imgUrl: string =
    'https://i1.sndcdn.com/avatars-000407353839-yl99k0-t500x500.jpg';

  like: number = 1;

  handleLike(message: string) {
    console.log(message);
    this.like += 1;
  }

  message: string = '';

  handleChange(event: any) {
    event.preventDefault();
    console.log(event.target.value);
    this.message = event.target.value;
  }
  constructor() {}

  ngOnInit(): void {}
}
