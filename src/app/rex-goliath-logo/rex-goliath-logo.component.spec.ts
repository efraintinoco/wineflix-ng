import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexGoliathLogoComponent } from './rex-goliath-logo.component';

describe('RexGoliathLogoComponent', () => {
  let component: RexGoliathLogoComponent;
  let fixture: ComponentFixture<RexGoliathLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexGoliathLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RexGoliathLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
