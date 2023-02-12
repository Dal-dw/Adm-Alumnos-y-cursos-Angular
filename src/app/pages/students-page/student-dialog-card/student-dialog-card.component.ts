import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/courses.model';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-student-dialog-card',
  templateUrl: './student-dialog-card.component.html',
  styleUrls: ['./student-dialog-card.component.scss'],
})
export class StudentDialogCardComponent implements OnInit {
  studentDetails: Student = {
    id: 0,
    name: '',
    lastName: '',
    edad: 0,
    tipo: '',
    cursando: [],
    thumbnail: '',
  };

  displayedColumns = ['name', 'thumbnail', 'delete'];

  constructor(
    public readonly MatDialogRef: MatDialogRef<StudentDialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    console.log(data);
    if (data) {
      this.studentDetails = data;
    }
  }

  close() {
    this.MatDialogRef.close();
  }

  ngOnInit() {}
}
