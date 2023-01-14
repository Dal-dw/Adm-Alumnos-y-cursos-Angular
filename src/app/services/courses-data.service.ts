import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  public courses$: Observable<Course[]>;
  public courses = new BehaviorSubject<Course[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getCourses(): Observable<Course[]> {
    return this.httpClient
      .get('https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Courses')
      .pipe(map((c) => c as Course[]));
  }

  eliminarAlumno(course: Course) {
    this.httpClient
      .delete(
        `https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Courses/${course.id}`
      )
      .subscribe((_) => {
        let nuevaLista = this.courses
          .getValue()
          .filter((s) => s.id !== course.id);
        this.courses.next(nuevaLista);
      });
  }

  editarAlumno(course: Course): void {
    this.httpClient
      .put(
        `https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Courses/${course.id}`,
        course
      )
      .subscribe((_) => {
        let nuevaLista = this.courses
          .getValue()
          .map((c) => (c.id === course.id ? course : c));
        this.courses.next(nuevaLista);
      });
  }
}
