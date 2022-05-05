import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOverlayComponent } from './portfolio-overlay.component';

describe('PortfolioOverlayComponent', () => {
  let component: PortfolioOverlayComponent;
  let fixture: ComponentFixture<PortfolioOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
