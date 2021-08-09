import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicateComponent } from './communicate.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [CommunicateComponent, ParentComponent, ChildComponent],
  imports: [CommonModule],
  exports: [CommunicateComponent],
})
export class CommunicateModule {}
