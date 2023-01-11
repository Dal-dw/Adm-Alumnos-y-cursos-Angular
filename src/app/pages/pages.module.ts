import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMaterialModule } from '../shared/modules/my-material.module';
import { SharedComponentsModule } from '../shared/components/components.module';
import { StudentsPageModule } from './students-page/students-page.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { UsersPageModule } from './users-page/users-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    StudentsPageModule,
    CoursesPageModule,
    UsersPageModule,
  ],
  exports: [StudentsPageModule, CoursesPageModule, UsersPageModule],
})
export class PagesModule {}
