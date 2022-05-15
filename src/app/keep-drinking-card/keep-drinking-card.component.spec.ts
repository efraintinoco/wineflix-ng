import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepDrinkingCardComponent } from './keep-drinking-card.component';

describe('KeepDrinkingCardComponent', () => {
  let component: KeepDrinkingCardComponent;
  let fixture: ComponentFixture<KeepDrinkingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepDrinkingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepDrinkingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
