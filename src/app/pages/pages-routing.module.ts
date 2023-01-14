import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      {
        path: 'cursos',
        loadChildren: () =>
          import('./courses-page/courses-page.module').then(
            (module) => module.CoursesPageModule
          ),
      },
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./students-page/students-page.module').then(
            (module) => module.StudentsPageModule
          ),
      },
      {
        path: '**',
        redirectTo: 'alumnos/alumnoslista',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
