import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { MyMaterialModule } from 'src/app/shared/modules/my-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    MyMaterialModule,
    SharedComponentsModule,
  ],
  exports: [UsersPageComponent],
})
export class UsersPageModule {}
