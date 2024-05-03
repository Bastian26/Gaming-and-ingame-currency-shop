import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldOfferItemComponent } from './gold-offer-item.component';

describe('GoldOfferItemComponent', () => {
  let component: GoldOfferItemComponent;
  let fixture: ComponentFixture<GoldOfferItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldOfferItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
