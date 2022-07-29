import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMesComponent } from './ventas-mes.component';

describe('VentasMesComponent', () => {
  let component: VentasMesComponent;
  let fixture: ComponentFixture<VentasMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
