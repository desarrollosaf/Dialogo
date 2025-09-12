import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoCiudadanoComponent } from './derecho-ciudadano.component';

describe('DerechoCiudadanoComponent', () => {
  let component: DerechoCiudadanoComponent;
  let fixture: ComponentFixture<DerechoCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerechoCiudadanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerechoCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
