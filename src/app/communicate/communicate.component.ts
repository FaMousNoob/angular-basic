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
  @ViewChild(ParentComponent) parent!: ParentComponent;
  @ViewChild('inputSearch') search!: ElementRef;
  @ViewChildren(ParentComponent) parents!: QueryList<ParentComponent>;
  showChild() {
    console.log(this.parent!.userInfo);
    console.log(this.search!.nativeElement.name);
    this.search!.nativeElement.value = 'hello';
    console.log(this.parents.first.userInfo.birthday);
    console.log(this.parents);
  }
  ngOnInit(): void {}
}
