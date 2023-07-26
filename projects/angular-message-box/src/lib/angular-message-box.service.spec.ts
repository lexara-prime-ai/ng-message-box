import { TestBed } from '@angular/core/testing';

import { AngularMessageBoxService } from './angular-message-box.service';

describe('AngularMessageBoxService', () => {
  let service: AngularMessageBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMessageBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
