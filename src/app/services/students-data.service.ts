import { Injectable } from '@angular/core';
import { Course } from '../models/courses.model';
import { Student } from '../models/students.model';
import { CoursesDataService } from './courses-data.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsDataService {
  courses: Course[] = this.serviceCou.getCourses();

  coursesTest = console.log(this.courses[1]);

  constructor(private serviceCou: CoursesDataService) {}

  public getStudents(): Student[] {
    return [
      {
        id: 1,
        name: 'Juan',
        lastName: 'Pérez',
        edad: 30,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704y',
      },
      {
        id: 2,
        name: 'Ana',
        lastName: 'González',
        edad: 25,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704t',
      },
      {
        id: 3,
        name: 'Pedro',
        lastName: 'Martínez',
        edad: 35,
        tipo: 'Alumno',
        cursando: [this.courses[1]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704u',
      },
      {
        id: 4,
        name: 'Sandra',
        lastName: 'Rodríguez',
        edad: 28,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704n',
      },
      {
        id: 5,
        name: 'Laura',
        lastName: 'Sánchez',
        edad: 32,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704d',
      },
      {
        id: 6,
        name: 'Pablo',
        lastName: 'García',
        edad: 40,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704g',
      },
      {
        id: 7,
        name: 'Mario',
        lastName: 'López',
        edad: 45,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704h',
      },
      {
        id: 8,
        name: 'Raquel',
        lastName: 'Díaz',
        edad: 37,
        tipo: 'Alumno',
        cursando: [this.courses[1], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704i',
      },
      {
        id: 9,
        name: 'Ramona',
        lastName: 'Fernández',
        edad: 29,
        tipo: 'Alumno',
        cursando: [this.courses[1]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704k',
      },
      {
        id: 10,
        name: 'Andrés',
        lastName: 'Muñoz',
        edad: 33,
        tipo: 'Alumno',
        cursando: [this.courses[0], this.courses[2]],
        thumbnail: 'https://i.pravatar.cc/100?u=a042581f4e29026704m',
      },
    ];
  }
}
