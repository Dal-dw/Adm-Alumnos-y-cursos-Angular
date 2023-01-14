import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { CoursesPageRoutingModule } from './courses-page-routing.module';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    CoursesPageRoutingModule,
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
