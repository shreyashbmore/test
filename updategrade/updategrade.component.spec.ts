import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategradeComponent } from './updategrade.component';

describe('UpdategradeComponent', () => {
  let component: UpdategradeComponent;
  let fixture: ComponentFixture<UpdategradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdategradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
