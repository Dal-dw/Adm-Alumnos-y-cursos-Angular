import { Student } from './students.model';

export interface StudentState {
  loading: boolean;
  students: ReadonlyArray<Student>;
}
