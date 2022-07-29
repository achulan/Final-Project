import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaObjetivoComponent } from './falta-objetivo.component';

describe('FaltaObjetivoComponent', () => {
  let component: FaltaObjetivoComponent;
  let fixture: ComponentFixture<FaltaObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltaObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaltaObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
