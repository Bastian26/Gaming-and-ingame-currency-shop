import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowRetailComponent } from './wow-retail.component';

describe('WowRetailComponent', () => {
  let component: WowRetailComponent;
  let fixture: ComponentFixture<WowRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowRetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
