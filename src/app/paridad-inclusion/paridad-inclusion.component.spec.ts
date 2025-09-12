import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParidadInclusionComponent } from './paridad-inclusion.component';

describe('ParidadInclusionComponent', () => {
  let component: ParidadInclusionComponent;
  let fixture: ComponentFixture<ParidadInclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParidadInclusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParidadInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
