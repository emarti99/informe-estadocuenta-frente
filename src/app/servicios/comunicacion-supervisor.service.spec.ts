import { TestBed } from '@angular/core/testing';

import { ComunicacionSupervisorService } from './comunicacion-supervisor.service';

describe('ComunicacionSupervisorService', () => {
  let service: ComunicacionSupervisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionSupervisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
