import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticoEdomexComponent } from './plastico-edomex.component';

describe('PlasticoEdomexComponent', () => {
  let component: PlasticoEdomexComponent;
  let fixture: ComponentFixture<PlasticoEdomexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlasticoEdomexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlasticoEdomexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
