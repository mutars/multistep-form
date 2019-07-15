import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVoeComponent } from './form-voe.component';

describe('FormVoeComponent', () => {
  let component: FormVoeComponent;
  let fixture: ComponentFixture<FormVoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
