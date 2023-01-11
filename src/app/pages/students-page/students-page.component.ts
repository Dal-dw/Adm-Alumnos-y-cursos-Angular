import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';
import { StudentsDataService } from 'src/app/services/students-data.service';
import { Student } from '../../models/students.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { StudentDialogCardComponent } from './student-dialog-card/student-dialog-card.component';
import { CoursesDataService } from '../../services/courses-data.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  courses: Course[] = this.servicioCou.getCourses();

  students: Student[] = this.servicioStu.getStudents();

  displayedColumns = [
    'id',
    'name',
    'lastName',
    'edad',
    'thumbnail',
    'edit',
    'delete',
    'detail',
  ];

  constructor(
    private readonly dialogService: MatDialog,
    private servicioStu: StudentsDataService,
    private servicioCou: CoursesDataService
  ) {}

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
            value.tipo,
            'https://i.pravatar.cc/100',
            value.cursando
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

  detailStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogCardComponent, {
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
