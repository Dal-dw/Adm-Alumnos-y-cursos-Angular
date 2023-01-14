import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';

// localhost:4200/students...
const routes: Routes = [
  {
    path: 'cursoslista',
    component: CoursesPageComponent,
  },
  /* {
    path: ':studentId',
    component: StudentDetailPageComponent,
  }, */
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
