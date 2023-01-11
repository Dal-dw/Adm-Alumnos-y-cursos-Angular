import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [CommonModule, MyMaterialModule, SharedComponentsModule],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
