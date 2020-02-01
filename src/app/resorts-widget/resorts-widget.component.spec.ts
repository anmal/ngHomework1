import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsWidgetComponent } from './resorts-widget.component';
import {ResortInfoDetailComponent} from '../object-views/resort-info-detail/resort-info-detail.component';
import {ResortInfoBriefComponent} from '../object-views/resort-info-brief/resort-info-brief.component';
import {FooterComponent} from '../ui-components/footer/footer.component';
import {ImgUrlPipe} from '../pipes/imgUrl.pipe';
import {WeatherComponent} from '../object-views/weather/weather.component';
import {SocialInfoComponent} from '../object-views/social-info/social-info.component';
import {TelephonePipe} from '../pipes/telephone.pipe';
import {TemperatureComponent} from '../object-views/temperature/temperature.component';

describe('ResortsWidgetComponent', () => {
  let component: ResortsWidgetComponent;
  let fixture: ComponentFixture<ResortsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [
      //   ImgUrlPipe
      // ],
      declarations: [ ResortsWidgetComponent,
        ResortInfoDetailComponent,
        ResortInfoBriefComponent,
        FooterComponent,
        WeatherComponent,
        SocialInfoComponent,
        TemperatureComponent,
        ImgUrlPipe,
        TelephonePipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
