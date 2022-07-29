import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenHomeMovComponent } from './imagen-home-mov.component';

describe('ImagenHomeMovComponent', () => {
  let component: ImagenHomeMovComponent;
  let fixture: ComponentFixture<ImagenHomeMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenHomeMovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenHomeMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
