import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogCardComponent } from './student-dialog-card.component';
import { MyMaterialModule } from '../../../shared/modules/my-material.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MyMaterialModule, MatCardModule],
  declarations: [StudentDialogCardComponent],
})
export class StudentDialogCardModule {}
