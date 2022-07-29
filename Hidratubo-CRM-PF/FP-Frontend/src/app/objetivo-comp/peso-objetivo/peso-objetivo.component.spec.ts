import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoObjetivoComponent } from './peso-objetivo.component';

describe('PesoObjetivoComponent', () => {
  let component: PesoObjetivoComponent;
  let fixture: ComponentFixture<PesoObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
