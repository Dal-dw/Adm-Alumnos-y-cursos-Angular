import { Course } from './courses.model';
export class Student {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public edad: number,
    public tipo: string,
    public thumbnail: string,
    public cursando: Course[]
  ) {}
}
