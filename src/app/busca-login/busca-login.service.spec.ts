import { TestBed } from '@angular/core/testing';

import { BuscaLoginService } from './busca-login.service';

describe('BuscaLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaLoginService = TestBed.get(BuscaLoginService);
    expect(service).toBeTruthy();
  });
});
