import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformaJudicialComponent } from './reforma-judicial.component';

describe('ReformaJudicialComponent', () => {
  let component: ReformaJudicialComponent;
  let fixture: ComponentFixture<ReformaJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReformaJudicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReformaJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
