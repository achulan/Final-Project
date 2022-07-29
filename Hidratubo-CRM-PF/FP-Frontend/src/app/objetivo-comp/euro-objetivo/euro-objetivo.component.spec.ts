import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroObjetivoComponent } from './euro-objetivo.component';

describe('EuroObjetivoComponent', () => {
  let component: EuroObjetivoComponent;
  let fixture: ComponentFixture<EuroObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuroObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
