import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujeresPresupuestoComponent } from './mujeres-presupuesto.component';

describe('MujeresPresupuestoComponent', () => {
  let component: MujeresPresupuestoComponent;
  let fixture: ComponentFixture<MujeresPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MujeresPresupuestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MujeresPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
