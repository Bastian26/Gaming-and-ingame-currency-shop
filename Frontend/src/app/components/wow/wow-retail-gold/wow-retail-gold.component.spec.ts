import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowRetailGoldComponent } from './wow-retail-gold.component';

describe('WowRetailGoldComponent', () => {
  let component: WowRetailGoldComponent;
  let fixture: ComponentFixture<WowRetailGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WowRetailGoldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WowRetailGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
