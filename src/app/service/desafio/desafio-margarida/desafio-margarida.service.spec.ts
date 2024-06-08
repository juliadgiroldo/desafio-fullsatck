import { TestBed } from '@angular/core/testing';

import { DesafioMargaridaService } from './desafio-margarida.service';

describe('DesafioMargaridaService', () => {
  let service: DesafioMargaridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesafioMargaridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
