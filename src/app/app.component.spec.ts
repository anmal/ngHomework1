import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ResortsWidgetComponent} from './resorts-widget/resorts-widget.component';
import {ImgUrlPipe} from './pipes/imgUrl.pipe';
import {ResortInfoBriefComponent} from './object-views/resort-info-brief/resort-info-brief.component';
import {ResortInfoDetailComponent} from './object-views/resort-info-detail/resort-info-detail.component';
import {FooterComponent} from './ui-components/footer/footer.component';
import {TelephonePipe} from './pipes/telephone.pipe';
import {WeatherComponent} from './object-views/weather/weather.component';
import {TemperatureComponent} from './object-views/temperature/temperature.component';
import {SocialInfoComponent} from './object-views/social-info/social-info.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        ResortsWidgetComponent,
        ImgUrlPipe,
        TelephonePipe,
        ResortInfoBriefComponent,
        ResortInfoDetailComponent,
        FooterComponent,
        WeatherComponent,
        TemperatureComponent,
        SocialInfoComponent,



      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngHomework1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngHomework1');
  });

});
