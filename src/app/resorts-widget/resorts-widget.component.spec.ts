import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsWidgetComponent } from './resorts-widget.component';

describe('HotelWidgetComponent', () => {
  let component: ResortsWidgetComponent;
  let fixture: ComponentFixture<ResortsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsWidgetComponent ]
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
