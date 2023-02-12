import { NgModule, isDevMode } from '@angular/core';
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
import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
    MatTooltipModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class AppModule {}
