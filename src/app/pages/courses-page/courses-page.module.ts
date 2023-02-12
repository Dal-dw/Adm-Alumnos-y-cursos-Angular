import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { StoreModule } from '@ngrx/store';
import { CoursesEffects } from './store/courses.effects';
import { reducer, coursesFeatureKey } from './store/courses.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    CoursesPageRoutingModule,

    StoreModule.forFeature(coursesFeatureKey, reducer),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
