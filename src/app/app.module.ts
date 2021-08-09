import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTapHaiModule } from './bai-tap-hai/bai-tap-hai.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { BaiTapMotModule } from './bai-tap-mot/bai-tap-mot.module';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DirectivesModule } from './directives/directives.module';
import { CommunicateModule } from './communicate/communicate.module';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTapHaiModule,
    BaiTapMotModule,
    DataBindingModule,
    DirectivesModule,
    CommunicateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
