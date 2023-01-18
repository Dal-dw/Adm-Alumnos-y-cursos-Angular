/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentsDataService } from './students-data.service';

xdescribe('Service: StudentsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsDataService],
    });
  });

  it('should ...', inject(
    [StudentsDataService],
    (service: StudentsDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
