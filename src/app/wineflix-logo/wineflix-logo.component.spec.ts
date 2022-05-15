import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineflixLogoComponent } from './wineflix-logo.component';

describe('WineflixLogoComponent', () => {
  let component: WineflixLogoComponent;
  let fixture: ComponentFixture<WineflixLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineflixLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineflixLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
