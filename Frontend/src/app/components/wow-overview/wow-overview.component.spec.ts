import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowOverviewComponent } from './wow-overview.component';

describe('LandingPageComponent', () => {
  let component: WowOverviewComponent;
  let fixture: ComponentFixture<WowOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WowOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WowOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
