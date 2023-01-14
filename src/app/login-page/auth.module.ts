import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { AuthRoutingModule } from './auth-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedModule } from 'src/app/shared/modules/shared-module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    AuthRoutingModule,
    MyMaterialModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
