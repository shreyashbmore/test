import { TestBed } from '@angular/core/testing';

import { StudentDataServiceService } from './student-data-service.service';

describe('StudentDataServiceService', () => {
  let service: StudentDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
