import { Action, createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/models/students.model';
import * as StudentsActions from './students.actions';
import { editStudent, editStudentSuccess } from './students.actions';

export const studentsFeatureKey = 'students';

export interface State {
  data: Student[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // READ / LECTURA
  on(StudentsActions.loadStudents, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(StudentsActions.loadStudentsSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }),
  on(StudentsActions.loadStudentsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  // CREATE
  on(StudentsActions.createStudent, (state) => ({ ...state, loading: true })),
  on(StudentsActions.createStudentSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: [...state.data, action.data],
  })),

  //EDIT
  on(StudentsActions.editStudent, (state) => ({ ...state, loading: true })),
  on(StudentsActions.editStudentSuccess, (state, action) => {
    const editedStudents = state.data.map((state) => {
      return action.data.id === state.id ? action.data : state;
    });
    return {
      ...state,
      loading: false,
      data: editedStudents,
    };
  }),

  //DELETE
  on(StudentsActions.deleteStudent, (state) => ({
    ...state,
    loading: true,
  })),
  on(StudentsActions.deleteStudentSuccess, (state, { data }) => ({
    ...state,
    data: state.data.filter((student) => student.id !== data.id),
    loading: false,
  })),
  on(StudentsActions.deleteStudentFailure, (state) => ({
    ...state,
    loading: false,
  })),

  on(StudentsActions.resetStudentState, () => initialState)
);
