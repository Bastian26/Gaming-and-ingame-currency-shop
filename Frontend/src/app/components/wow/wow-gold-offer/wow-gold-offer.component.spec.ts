import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowGoldOfferComponent } from './wow-gold-offer.component';

describe('WowGoldOfferComponent', () => {
  let component: WowGoldOfferComponent;
  let fixture: ComponentFixture<WowGoldOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowGoldOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowGoldOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
