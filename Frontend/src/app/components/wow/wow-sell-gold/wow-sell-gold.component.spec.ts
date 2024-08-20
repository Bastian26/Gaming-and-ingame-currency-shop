import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowSellGoldComponent } from './wow-sell-gold.component';

describe('WowSellGoldComponent', () => {
  let component: WowSellGoldComponent;
  let fixture: ComponentFixture<WowSellGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowSellGoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowSellGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
