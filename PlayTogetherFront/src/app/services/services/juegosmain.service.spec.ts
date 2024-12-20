import { TestBed } from '@angular/core/testing';

import { JuegosmainService } from './juegosmain.service';

describe('JuegosmainService', () => {
  let service: JuegosmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
