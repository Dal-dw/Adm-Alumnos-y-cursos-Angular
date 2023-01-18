/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoursesDataService } from './courses-data.service';

xdescribe('Service: CoursesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDataService],
    });
  });

  it('should ...', inject(
    [CoursesDataService],
    (service: CoursesDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
