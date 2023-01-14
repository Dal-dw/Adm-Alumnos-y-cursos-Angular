import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TitleSizeDirective } from './directives/title-size.directive';

import { MyMaterialModule } from './shared/modules/my-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared-module';
import { LayoutModule } from './pages/layout/layout.module';
import { UsersPageModule } from './pages/users-page/users-page.module';

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
  ],
})
export class AppModule {}
