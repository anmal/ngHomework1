import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './object-views/weather/weather.component';
import { SocialInfoComponent } from './object-views/social-info/social-info.component';
import { ResortInfoDetailComponent } from './object-views/resort-info-detail/resort-info-detail.component';
import { ResortsWidgetComponent } from './resorts-widget/resorts-widget.component';
import { FooterComponent } from './ui-components/footer/footer.component';
import { ResortInfoBriefComponent } from './object-views/resort-info-brief/resort-info-brief.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { TemperatureComponent } from './object-views/temperature/temperature.component';
import { ImgUrlPipe } from './pipes/imgUrl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    ResortInfoDetailComponent,
    ResortsWidgetComponent,
    FooterComponent,
    ResortInfoBriefComponent,
    TelephonePipe,
    TemperatureComponent,
    ImgUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
