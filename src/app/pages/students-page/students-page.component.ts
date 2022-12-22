import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/students.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students: Student[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Pérez',
      edad: 30,
      isActive: true,
      thumbnail: 'https://example.com/fotos/juan.jpg',
    },
    {
      id: 2,
      name: 'Ana',
      lastName: 'González',
      edad: 25,
      isActive: true,
      thumbnail: 'https://example.com/fotos/ana.jpg',
    },
    {
      id: 3,
      name: 'Pedro',
      lastName: 'Martínez',
      edad: 35,
      isActive: true,
      thumbnail: 'https://example.com/fotos/pedro.jpg',
    },
    {
      id: 4,
      name: 'Sandra',
      lastName: 'Rodríguez',
      edad: 28,
      isActive: true,
      thumbnail: 'https://example.com/fotos/sandra.jpg',
    },
    {
      id: 5,
      name: 'Laura',
      lastName: 'Sánchez',
      edad: 32,
      isActive: true,
      thumbnail: 'https://example.com/fotos/laura.jpg',
    },
    {
      id: 6,
      name: 'Pablo',
      lastName: 'García',
      edad: 40,
      isActive: false,
      thumbnail: 'https://example.com/fotos/pablo.jpg',
    },
    {
      id: 7,
      name: 'Mario',
      lastName: 'López',
      edad: 45,
      isActive: false,
      thumbnail: 'https://example.com/fotos/mario.jpg',
    },
    {
      id: 8,
      name: 'Raquel',
      lastName: 'Díaz',
      edad: 37,
      isActive: true,
      thumbnail: 'https://example.com/fotos/raquel.jpg',
    },
    {
      id: 9,
      name: 'Ramona',
      lastName: 'Fernández',
      edad: 29,
      isActive: false,
      thumbnail: 'https://example.com/fotos/cristina.jpg',
    },
    {
      id: 10,
      name: 'Andrés',
      lastName: 'Muñoz',
      edad: 33,
      isActive: true,
      thumbnail: 'https://example.com/fotos/andres.jpg',
    },
  ];

  displayedColumns = [
    'id',
    'name',
    'lastName',
    'edad',
    'isActive',
    'thumbnail',
    'edit',
    'delete',
  ];

  constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent);

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [
          ...this.students,
          new Student(
            lastId + 1,
            value.name,
            value.lastName,
            value.edad,
            value.isActive,
            value.thumbnail
          ),
        ];
      }
    });
  }
  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }
  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        const tempArray = this.students.map((stu) =>
          stu.id === student.id ? { ...stu, ...data } : stu
        );
        this.students = tempArray;
      }
    });
  }

  ngOnInit(): void {}
}
