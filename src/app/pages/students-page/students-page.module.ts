import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { StudentDialogCardModule } from './student-dialog-card/student-dialog-card.module';
import { StudentsPageRoutingModule } from './student-page-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/students.effects';

import { reducer, studentsFeatureKey } from './store/students.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    StudentsPageRoutingModule,
    StudentDialogCardModule,

    StoreModule.forFeature(studentsFeatureKey, reducer),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
