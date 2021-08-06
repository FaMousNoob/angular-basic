import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapMotComponent } from './bai-tap-mot.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [BaiTapMotComponent, HeaderComponent, ContentComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [BaiTapMotComponent],
})
export class BaiTapMotModule {}
