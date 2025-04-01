/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RfqService } from './rfq.service';

describe('Service: Rfq', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RfqService]
    });
  });

  it('should ...', inject([RfqService], (service: RfqService) => {
    expect(service).toBeTruthy();
  }));
});
