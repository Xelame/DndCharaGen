/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Open5eService } from './open5e.service';

describe('Service: Open5e', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Open5eService]
    });
  });

  it('should ...', inject([Open5eService], (service: Open5eService) => {
    expect(service).toBeTruthy();
  }));
});
