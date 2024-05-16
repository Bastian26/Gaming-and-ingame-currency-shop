import { TestBed } from '@angular/core/testing';

import { IngameCurrencyService } from './ingame-currency.service';

describe('IngameCurrencyService', () => {
  let service: IngameCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngameCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
