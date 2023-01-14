import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMaterialModule } from '../shared/modules/my-material.module';
import { SharedComponentsModule } from '../shared/components/components.module';
import { StudentsPageModule } from './students-page/students-page.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { UsersPageModule } from './users-page/users-page.module';

import { AuthModule } from '../login-page/auth.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/modules/shared-module';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [PagesComponent, LayoutComponent],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedComponentsModule,
    StudentsPageModule,
    CoursesPageModule,
    PagesRoutingModule,
    CoursesPageModule,
    UsersPageModule,
    AuthModule,
    LayoutModule,
  ],
  exports: [StudentsPageModule, CoursesPageModule, UsersPageModule, AuthModule],
})
export class PagesModule {}
