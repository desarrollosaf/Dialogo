import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockMexiquenseComponent } from './rock-mexiquense.component';

describe('RockMexiquenseComponent', () => {
  let component: RockMexiquenseComponent;
  let fixture: ComponentFixture<RockMexiquenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RockMexiquenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockMexiquenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
