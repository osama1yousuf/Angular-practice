import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldRFComponent } from './input-field-rf.component';

describe('InputFieldRFComponent', () => {
  let component: InputFieldRFComponent;
  let fixture: ComponentFixture<InputFieldRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldRFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
