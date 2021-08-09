import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css'],
})
export class CommunicateComponent implements OnInit {
  @ViewChild(ParentComponent) parent?: ParentComponent;

  @ViewChild('inputSearch') search?: ElementRef;

  @ViewChildren(ParentComponent) tagListParent!: QueryList<ParentComponent>;
  constructor() {}

  showViewChild() {
    console.log(this.parent?.userInfo);
    console.log(this.search?.nativeElement.name);
    this.search!.nativeElement.focus();
    this.search!.nativeElement.value = 'hello';
    console.log(this.tagListParent);
  }
  ngOnInit(): void {}
}
