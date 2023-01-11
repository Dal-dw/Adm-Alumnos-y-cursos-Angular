import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { MyMaterialModule } from '../modules/my-material.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    CourseDialogComponent,
    StudentDialogComponent,
    UserDialogComponent,
  ],
  imports: [CommonModule, MyMaterialModule, ReactiveFormsModule],
  exports: [CourseDialogComponent, StudentDialogComponent, UserDialogComponent],
})
export class SharedComponentsModule {}
