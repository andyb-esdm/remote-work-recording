import { TestBed, inject } from '@angular/core/testing';

import { WorkRecordService } from './work-record.service';

describe('WorkRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkRecordService]
    });
  });

  it('should be created', inject([WorkRecordService], (service: WorkRecordService) => {
    expect(service).toBeTruthy();
  }));
});
