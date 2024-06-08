import { TestBed } from '@angular/core/testing';

import { DesafioPetuniaService } from './desafio-petunia.service';

describe('DesafioPetuniaService', () => {
  let service: DesafioPetuniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesafioPetuniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
