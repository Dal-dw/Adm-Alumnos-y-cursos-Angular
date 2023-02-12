import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of, Subject } from 'rxjs';
import * as StudentsActions from './students.actions';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/students.model';
import { createStudent, editStudent } from './students.actions';

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.loadStudents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getStudentsFromApi().pipe(
          map((data) => StudentsActions.loadStudentsSuccess({ data })),
          catchError((error) =>
            of(StudentsActions.loadStudentsFailure({ error }))
          )
        )
      )
    );
  });

  createStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.createStudent),
      concatMap((action) =>
        this.createStudent(action.data).pipe(
          map((response) =>
            StudentsActions.createStudentSuccess({ data: response })
          ),
          catchError((error) =>
            of(StudentsActions.createStudentFailure({ error }))
          )
        )
      )
    );
  });

  editStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.editStudent),
      concatMap((action) =>
        this.editStudent(action.data).pipe(
          map((response) =>
            StudentsActions.editStudentSuccess({ data: response })
          ),
          catchError((error) =>
            of(StudentsActions.editStudentFailure({ error }))
          )
        )
      )
    );
  });

  deleteStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentsActions.deleteStudent),
      concatMap((action) =>
        this.deleteStudent(action.data).pipe(
          map((response) =>
            StudentsActions.deleteStudentSuccess({ data: response })
          ),
          catchError((error) =>
            of(StudentsActions.deleteStudentFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private getStudentsFromApi(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      'https://63b20c175e490925c512c2ba.mockapi.io/Users'
    );
  }
  private createStudent(data: { title: string }): Observable<Student> {
    return this.httpClient.post<Student>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Users`,
      data
    );
  }

  private editStudent(data: Student): Observable<Student> {
    return this.httpClient.put<Student>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Users/${data.id}`,
      data
    );
  }

  private deleteStudent(data: Student): Observable<Student> {
    return this.httpClient.delete<Student>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Users/${data.id}`
    );
  }
}
