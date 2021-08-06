import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapHaiComponent } from './bai-tap-hai.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    BaiTapHaiComponent,
    HeaderComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    CardItemComponent,
  ],
  imports: [CommonModule],
  exports: [BaiTapHaiComponent],
})
export class BaiTapHaiModule {}
