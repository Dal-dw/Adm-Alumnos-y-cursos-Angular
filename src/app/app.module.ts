import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TitleSizeDirective } from './directives/title-size.directive';

import { MyMaterialModule } from './shared/modules/my-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared-module';
import { LayoutModule } from './shared/layout/layout.module';
import { UsersPageModule } from './pages/users-page/users-page.module';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const rutas: Routes = [
  { path: 'users', component: UsersPageComponent },
  { path: 'students', component: StudentsPageComponent },
  { path: 'courses', component: CoursesPageComponent },
];

@NgModule({
  declarations: [AppComponent, TitleSizeDirective],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    LayoutModule,
    UsersPageModule,
    RouterModule.forRoot(rutas),
  ],
})
export class AppModule {}
