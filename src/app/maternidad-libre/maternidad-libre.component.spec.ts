import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternidadLibreComponent } from './maternidad-libre.component';

describe('MaternidadLibreComponent', () => {
  let component: MaternidadLibreComponent;
  let fixture: ComponentFixture<MaternidadLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaternidadLibreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaternidadLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
