export class Course {
  constructor(
    public id: number,
    public name: string,
    public hours: number,
    public classes: number,
    public teacher: string,
    public thumbnail: string
  ) {}
}
