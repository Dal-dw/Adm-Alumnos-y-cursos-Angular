import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/students.model';

import { CoursesDataService } from 'src/app/services/courses-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
})
export class StudentDialogComponent {
  public cursando$: Observable<any[]> = this.servicioCou.getCourses();

  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  edadControl = new FormControl(0, [Validators.max(100)]);
  tipoControl = new FormControl('');
  cursandoControl = new FormControl([]);

  idControl = new FormControl();
  thumbnailControl = new FormControl();

  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    edad: this.edadControl,
    tipo: this.tipoControl,
    id: this.idControl,
    thumbnail: this.thumbnailControl,
    cursando: this.cursandoControl,
  });

  constructor(
    private readonly MatDialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | null,
    private servicioCou: CoursesDataService
  ) {
    console.log(data);
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    if (this.studentForm.valid) {
      this.MatDialogRef.close();
    } else {
      console.log('not valid');
    }
  }
}
