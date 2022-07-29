import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoContactoFormComponent } from './nuevo-contacto-form.component';

describe('NuevoContactoFormComponent', () => {
  let component: NuevoContactoFormComponent;
  let fixture: ComponentFixture<NuevoContactoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoContactoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoContactoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
