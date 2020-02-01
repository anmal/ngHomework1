import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortInfoDetailComponent } from './resort-info-detail.component';

describe('HotelInfoComponent', () => {
  let component: ResortInfoDetailComponent;
  let fixture: ComponentFixture<ResortInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
