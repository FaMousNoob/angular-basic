import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributesComponent } from './attributes/attributes.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    StructuralComponent,
    AttributesComponent,
    HighlightDirective,
  ],
  imports: [CommonModule],
  exports: [DirectivesComponent],
})
export class DirectivesModule {}
