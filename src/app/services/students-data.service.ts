import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Course } from '../models/courses.model';
import { Student } from '../models/students.model';
import { CoursesDataService } from './courses-data.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsDataService {
  public students$: Observable<Student[]>;
  public students = new BehaviorSubject<Student[]>([]);

  courses: Observable<Course[]> = this.serviceCou.getCourses();
  coursesTest = console.log(this.courses[1]);

  constructor(
    private serviceCou: CoursesDataService,
    private httpClient: HttpClient
  ) {
    this.students$ = this.students.asObservable();
    this.getStudents().subscribe((stu) => {
      this.students.next(stu);
    });
  }

  public getStudents(): Observable<Student[]> {
    return this.httpClient
      .get('https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Users')
      .pipe(map((s) => s as Student[]));
  }

  eliminarAlumno(student: Student) {
    this.httpClient
      .delete(
        `https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Users/${student.id}`
      )
      .subscribe((_) => {
        let nuevaLista = this.students
          .getValue()
          .filter((s) => s.id !== student.id);
        this.students.next(nuevaLista);
      });
  }

  editarAlumno(student: Student): void {
    this.httpClient
      .put(
        `https://63b20c175e490925c512c2ba.mockapi.io/api/v1/Users/${student.id}`,
        student
      )
      .subscribe((_) => {
        let nuevaLista = this.students
          .getValue()
          .map((s) => (s.id === student.id ? student : s));
        this.students.next(nuevaLista);
      });
  }
}
