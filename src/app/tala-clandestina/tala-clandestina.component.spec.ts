import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalaClandestinaComponent } from './tala-clandestina.component';

describe('TalaClandestinaComponent', () => {
  let component: TalaClandestinaComponent;
  let fixture: ComponentFixture<TalaClandestinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalaClandestinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalaClandestinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
