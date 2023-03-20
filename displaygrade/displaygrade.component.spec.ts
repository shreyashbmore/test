import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaygradeComponent } from './displaygrade.component';

describe('DisplaygradeComponent', () => {
  let component: DisplaygradeComponent;
  let fixture: ComponentFixture<DisplaygradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaygradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaygradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
