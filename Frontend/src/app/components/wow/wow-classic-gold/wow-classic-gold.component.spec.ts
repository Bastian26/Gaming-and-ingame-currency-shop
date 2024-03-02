import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowClassicGoldComponent } from './wow-classic-gold.component';

describe('WowClassicGoldComponent', () => {
  let component: WowClassicGoldComponent;
  let fixture: ComponentFixture<WowClassicGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowClassicGoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowClassicGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
