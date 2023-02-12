import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of, Subject } from 'rxjs';
import * as CoursesActions from './courses.actions';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/courses.model';
import { createCourse, editCourse } from './courses.actions';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getCoursesFromApi().pipe(
          map((data) => CoursesActions.loadCoursesSuccess({ data })),
          catchError((error) =>
            of(CoursesActions.loadCoursesFailure({ error }))
          )
        )
      )
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      concatMap((action) =>
        this.createCourse(action.data).pipe(
          map((response) =>
            CoursesActions.createCourseSuccess({ data: response })
          ),
          catchError((error) =>
            of(CoursesActions.createCourseFailure({ error }))
          )
        )
      )
    );
  });

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.editCourse),
      concatMap((action) =>
        this.editCourse(action.data).pipe(
          map((response) =>
            CoursesActions.editCourseSuccess({ data: response })
          ),
          catchError((error) => of(CoursesActions.editCourseFailure({ error })))
        )
      )
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.deleteCourse),
      concatMap((action) =>
        this.deleteCourse(action.data).pipe(
          map((response) =>
            CoursesActions.deleteCourseSuccess({ data: response })
          ),
          catchError((error) =>
            of(CoursesActions.deleteCourseFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private getCoursesFromApi(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      'https://63b20c175e490925c512c2ba.mockapi.io/Courses'
    );
  }
  private createCourse(data: { title: string }): Observable<Course> {
    return this.httpClient.post<Course>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Courses`,
      data
    );
  }

  private editCourse(data: Course): Observable<Course> {
    return this.httpClient.put<Course>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Courses/${data.id}`,
      data
    );
  }

  private deleteCourse(data: Course): Observable<Course> {
    return this.httpClient.delete<Course>(
      `https://63b20c175e490925c512c2ba.mockapi.io/Courses/${data.id}`
    );
  }
}
