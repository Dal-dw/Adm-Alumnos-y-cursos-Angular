import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../models/courses.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
})
export class CourseDialogComponent {
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  hoursControl = new FormControl(0, [
    Validators.required,
    Validators.minLength(1),
    Validators.min(1),
  ]);
  classesControl = new FormControl(0, [
    Validators.required,
    Validators.minLength(1),
    Validators.min(1),
  ]);

  teacherControl = new FormControl();

  thumbnailControl = new FormControl();

  idControl = new FormControl();

  courseForm = new FormGroup({
    name: this.nameControl,
    hours: this.hoursControl,
    classes: this.classesControl,
    teacher: this.teacherControl,
    thumbnail: this.thumbnailControl,
    id: this.idControl,
  });

  constructor(
    private readonly MatDialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course | null
  ) {
    if (data) {
      this.courseForm.patchValue(data);
    }
  }
  close() {
    if (this.courseForm.valid) {
      this.MatDialogRef.close();
    }
  }
}
