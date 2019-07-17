import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedCakeComponent } from './rated-cake.component';

describe('RatedCakeComponent', () => {
  let component: RatedCakeComponent;
  let fixture: ComponentFixture<RatedCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
