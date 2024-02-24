import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagLanguagePickerComponent } from './flag-language-picker.component';

describe('FlagLanguagePickerComponent', () => {
  let component: FlagLanguagePickerComponent;
  let fixture: ComponentFixture<FlagLanguagePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagLanguagePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagLanguagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
