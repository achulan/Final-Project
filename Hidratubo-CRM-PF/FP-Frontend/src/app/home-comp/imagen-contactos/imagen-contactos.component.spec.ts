import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenContactosComponent } from './imagen-contactos.component';

describe('ImagenContactosComponent', () => {
  let component: ImagenContactosComponent;
  let fixture: ComponentFixture<ImagenContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
