import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ToolbarComponent } from './shared/layout/toolbar/toolbar.component';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './directives/title-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    ToolbarComponent,
    StudentDialogComponent,
    TitleSizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
