import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/models/students.model';

//LOAD
export const loadStudents = createAction('[Students] Load Students');

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ data: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students] Load Students Failure',
  props<{ error: any }>()
);

//CREATE
export const createStudent = createAction(
  '[Student] Create Student',
  props<{ data: { title: string } }>()
);
export const createStudentSuccess = createAction(
  '[Student] Create Student Success',
  props<{ data: Student }>()
);
export const createStudentFailure = createAction(
  '[Student] Create Student Failure',
  props<{ error: unknown }>()
);
export const resetStudentState = createAction('[Student] Reset Student State');

//EDIT
export const editStudent = createAction(
  '[Student] Edit Student',
  props<{ data: Student }>()
);
export const editStudentSuccess = createAction(
  '[Student] Edit Student Success',
  props<{ data: Student }>()
);
export const editStudentFailure = createAction(
  '[Student] Edit Student Failure',
  props<{ error: unknown }>()
);

//DELETE
export const deleteStudent = createAction(
  '[Student] Delete Student',
  props<{ data: Student }>()
);
export const deleteStudentSuccess = createAction(
  '[Student] Delete Student Success',
  props<{ data: Student }>()
);
export const deleteStudentFailure = createAction(
  '[Student] Delete Student Failure',
  props<{ error: unknown }>()
);
