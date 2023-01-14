import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { StudentsPageComponent } from '../students-page/students-page.component';

const routes: Routes = [
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      {
        path: 'cursos',
        loadChildren: () =>
          import('../courses-page/courses-page.module').then(
            (module) => module.CoursesPageModule
          ),
      },
      /* {
        path: 'alumnos',
        loadChildren: () =>
          import('../students-page/students-page.module').then(
            (module) => module.StudentsPageModule
          ),
      }, */
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
