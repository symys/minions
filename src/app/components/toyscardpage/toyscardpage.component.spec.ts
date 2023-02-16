import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyscardpageComponent } from './toyscardpage.component';

describe('ToyscardpageComponent', () => {
  let component: ToyscardpageComponent;
  let fixture: ComponentFixture<ToyscardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyscardpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyscardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
