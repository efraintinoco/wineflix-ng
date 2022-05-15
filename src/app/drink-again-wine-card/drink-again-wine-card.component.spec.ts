import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkAgainWineCardComponent } from './drink-again-wine-card.component';

describe('DrinkAgainWineCardComponent', () => {
  let component: DrinkAgainWineCardComponent;
  let fixture: ComponentFixture<DrinkAgainWineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkAgainWineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkAgainWineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
