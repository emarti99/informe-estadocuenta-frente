import { TestBed } from '@angular/core/testing';

import { FrenteApiGatewayService } from './frente-api-gateway.service';

describe('FrenteApiGatewayService', () => {
  let service: FrenteApiGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrenteApiGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
