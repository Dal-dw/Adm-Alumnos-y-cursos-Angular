import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/students.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
})
export class StudentDialogComponent {
  nameControl = new FormControl('');
  lastNameControl = new FormControl('');
  edadControl = new FormControl('');
  isActiveControl = new FormControl('');
  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    edad: this.edadControl,
    isActive: this.isActiveControl,
  });
  constructor(
    private readonly MatDialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    console.log(data);
  }

  close() {
    this.MatDialogRef.close();
  }
}
