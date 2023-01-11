import { Injectable } from '@angular/core';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  constructor() {}

  public getCourses(): Course[] {
    return [
      {
        id: 1,
        name: 'Angular',
        hours: 32,
        classes: 16,
        teacher: 'Juan Perez',
        thumbnail:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      },
      {
        id: 2,
        name: 'Javascript',
        hours: 28,
        classes: 14,
        teacher: 'Mike Martinez',
        thumbnail:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        id: 3,
        name: 'React',
        hours: 24,
        classes: 12,
        teacher: 'Roberto Gimenez',
        thumbnail:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
    ];
  }
}
