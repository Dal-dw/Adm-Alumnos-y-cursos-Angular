import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/models/courses.model';
import * as CoursesActions from './courses.actions';
import { editCourse, editCourseSuccess } from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface State {
  data: Course[];
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
  on(CoursesActions.loadCourses, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(CoursesActions.loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }),
  on(CoursesActions.loadCoursesFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),

  // CREATE
  on(CoursesActions.createCourse, (state) => ({ ...state, loading: true })),
  on(CoursesActions.createCourseSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: [...state.data, action.data],
  })),

  //EDIT
  on(CoursesActions.editCourse, (state) => ({ ...state, loading: true })),
  on(CoursesActions.editCourseSuccess, (state, action) => {
    const editedCourses = state.data.map((state) => {
      return action.data.id === state.id ? action.data : state;
    });
    return {
      ...state,
      loading: false,
      data: editedCourses,
    };
  }),

  //DELETE
  on(CoursesActions.deleteCourse, (state) => ({
    ...state,
    loading: true,
  })),
  on(CoursesActions.deleteCourseSuccess, (state, { data }) => ({
    ...state,
    data: state.data.filter((course) => course.id !== data.id),
    loading: false,
  })),
  on(CoursesActions.deleteCourseFailure, (state) => ({
    ...state,
    loading: false,
  })),

  on(CoursesActions.resetCourseState, () => initialState)
);
