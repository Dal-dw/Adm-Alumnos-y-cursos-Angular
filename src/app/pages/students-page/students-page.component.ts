import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/students.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students: Student[] = [
    { id: 1, name: 'Juan', lastName: 'Pérez', edad: 32, isActive: true },
    { id: 2, name: 'Ana', lastName: 'González', edad: 25, isActive: true },
    { id: 3, name: 'Mario', lastName: 'Rodríguez', edad: 28, isActive: true },
    { id: 4, name: 'Sandra', lastName: 'Santos', edad: 30, isActive: true },
    { id: 5, name: 'Pablo', lastName: 'Martínez', edad: 35, isActive: false },
    { id: 6, name: 'Laura', lastName: 'Jiménez', edad: 22, isActive: true },
    { id: 7, name: 'Carlos', lastName: 'Díaz', edad: 40, isActive: true },
    { id: 8, name: 'Andrea', lastName: 'Lopez', edad: 27, isActive: false },
    { id: 9, name: 'Marcos', lastName: 'García', edad: 33, isActive: true },
    { id: 10, name: 'Sofía', lastName: 'Sánchez', edad: 29, isActive: true },
  ];

  displayedColumns = [
    'id',
    'name',
    'lastName',
    'edad',
    'isActive',
    'edit',
    'delete',
  ];

  ngOnInit(): void {}
}
