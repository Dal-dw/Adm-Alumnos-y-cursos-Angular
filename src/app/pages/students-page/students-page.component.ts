import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';
import { StudentsDataService } from 'src/app/services/students-data.service';
import { Student } from '../../models/students.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { StudentDialogCardComponent } from './student-dialog-card/student-dialog-card.component';
import { CoursesDataService } from '../../services/courses-data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  loadStudents,
  createStudent,
  editStudent,
} from './store/students.actions';
import { selectStudentsState } from './store/students.selectors';
import { deleteStudent } from './store/students.actions';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  courses: Observable<Course[]> = this.servicioCou.getCourses();
  students: Student[] = [];
  loading = true;

  //students: Student[] = this.servicioStu.getStudents();

  loading$: Observable<boolean> = new Observable();

  displayedColumns = [
    'name',
    'lastName',
    'edad',
    'cursando',
    'thumbnail',
    'edit',
    'delete',
    'detail',
  ];

  constructor(
    private readonly dialogService: MatDialog,
    private servicioCou: CoursesDataService,
    private store: Store
  ) {
    this.store.dispatch(loadStudents());
  }

  /* addStudent() {
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
            value.tipo,
            'https://i.pravatar.cc/100',
            value.cursando
          ),
        ];
      }
    });
  } */

  createStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent);
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.store.dispatch(createStudent({ data }));
      }
    });
  }

  ngOnInit(): void {
    this.store.select(selectStudentsState).subscribe((state) => {
      this.students = state.data;
      this.loading = state.loading;
    });
  }

  // clickEliminar(element: Student) {
  //   this.servicioStu.eliminarAlumno(element);
  // }
  deleteStudent(element: Student) {
    this.store.dispatch(deleteStudent({ data: element }));
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: element,
    });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.store.dispatch(editStudent({ data }));
      }
    });
  }

  detailStudent(element: Student) {
    this.dialogService.open(StudentDialogCardComponent, {
      data: element,
    });
  }
}
