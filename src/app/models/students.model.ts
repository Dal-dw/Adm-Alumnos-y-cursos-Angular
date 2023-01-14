import { Course } from './courses.model';

export interface Student {
  name: string;
  lastName: string;
  edad: number;
  tipo: string;
  thumbnail: string;
  cursando: Course[];
  id: number;
}
