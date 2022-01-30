import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressesFieldComponent } from './adresses-field.component';

describe('AdressesFieldComponent', () => {
  let component: AdressesFieldComponent;
  let fixture: ComponentFixture<AdressesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
