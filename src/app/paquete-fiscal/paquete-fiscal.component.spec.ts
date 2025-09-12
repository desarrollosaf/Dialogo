import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteFiscalComponent } from './paquete-fiscal.component';

describe('PaqueteFiscalComponent', () => {
  let component: PaqueteFiscalComponent;
  let fixture: ComponentFixture<PaqueteFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaqueteFiscalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
