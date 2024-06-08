import { TestBed } from '@angular/core/testing';

import { DesafioJasmimService } from './desafio-jasmim.service';

describe('DesafioJasmimService', () => {
  let service: DesafioJasmimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesafioJasmimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
