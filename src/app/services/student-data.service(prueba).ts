import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentApi, StudentApiResult } from '../models/sudentsApiModel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<StudentApiResult[]> {
    return this.http
      .get<StudentApi>('https://rickandmortyapi.com/api/character')
      .pipe(map((apiResult) => apiResult.results));
  }
}
