import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDashComponent } from './hero-dash.component';

describe('HeroDashComponent', () => {
  let component: HeroDashComponent;
  let fixture: ComponentFixture<HeroDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
