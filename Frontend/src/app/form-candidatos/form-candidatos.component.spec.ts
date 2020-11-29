import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCandidatosComponent } from './form-candidatos.component';

describe('FormCandidatosComponent', () => {
  let component: FormCandidatosComponent;
  let fixture: ComponentFixture<FormCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCandidatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
