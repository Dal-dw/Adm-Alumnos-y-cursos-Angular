import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/courses.model';

//LOAD
export const loadCourses = createAction('[Courses] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ data: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);

//CREATE
export const createCourse = createAction(
  '[Course] Create Course',
  props<{ data: { title: string } }>()
);
export const createCourseSuccess = createAction(
  '[Course] Create Course Success',
  props<{ data: Course }>()
);
export const createCourseFailure = createAction(
  '[Course] Create Course Failure',
  props<{ error: unknown }>()
);
export const resetCourseState = createAction('[Course] Reset Course State');

//EDIT
export const editCourse = createAction(
  '[Course] Edit Course',
  props<{ data: Course }>()
);
export const editCourseSuccess = createAction(
  '[Course] Edit Course Success',
  props<{ data: Course }>()
);
export const editCourseFailure = createAction(
  '[Course] Edit Course Failure',
  props<{ error: unknown }>()
);

//DELETE
export const deleteCourse = createAction(
  '[Course] Delete Course',
  props<{ data: Course }>()
);
export const deleteCourseSuccess = createAction(
  '[Course] Delete Course Success',
  props<{ data: Course }>()
);
export const deleteCourseFailure = createAction(
  '[Course] Delete Course Failure',
  props<{ error: unknown }>()
);
