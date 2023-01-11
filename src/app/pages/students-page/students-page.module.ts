import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { StudentDialogCardModule } from './student-dialog-card/student-dialog-card.module';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    StudentDialogCardModule,
  ],
  exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
