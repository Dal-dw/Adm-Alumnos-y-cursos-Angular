import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/students.model';

import { CoursesDataService } from 'src/app/services/courses-data.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
})
export class StudentDialogComponent {
  public cursando$: Observable<any[]> = this.servicioCou.getCourses();

  public availableOptions: any[];

  public thumbnailRandom1: string = 'https://i.pravatar.cc/100?img=3';
  public thumbnailRandom2: string = 'https://i.pravatar.cc/100?img=4';
  public thumbnailRandom3: string = 'https://i.pravatar.cc/100?img=5';

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

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: this.nameControl,
      lastName: this.lastNameControl,
      edad: this.edadControl,
      tipo: this.tipoControl,
      id: this.idControl,
      thumbnail: this.thumbnailControl,
      cursando: this.cursandoControl,
    });
    this.studentForm.updateValueAndValidity();
  }

  // public availableOptions = [{}];

  nuevoValue = [];
  onSelectionChange(event) {
    const selectedOption = event.value;
    const previousSelectedOptions = this.cursandoControl.defaultValue;

    if (!previousSelectedOptions.includes(selectedOption)) {
      this.cursandoControl.setValue([
        ...previousSelectedOptions,
        selectedOption,
      ]);
    }
  }

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
    if (data) {
      this.studentForm.patchValue(data);
      this.cursandoControl.setValue(data.cursando);
    }
  }

  close() {
    console.log(this.studentForm.valid);
    if (this.studentForm.valid) {
      this.MatDialogRef.close();
    }
  }
}
