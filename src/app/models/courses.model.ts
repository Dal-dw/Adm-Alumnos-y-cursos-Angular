export interface Course {
  name: string;
  hours: number;
  classes: number;
  teacher: string;
  thumbnail: string;
  id: number;
}

export interface CourseSel {
  name: string;
  thumbnail: string;
}

/* export class Course {
  constructor(
    public id: number,
    public name: string,
    public hours: number,
    public classes: number,
    public teacher: string,
    public thumbnail: string
  ) {}
} */
