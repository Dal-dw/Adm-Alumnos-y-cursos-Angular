import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from './my-material.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../pages/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyMaterialModule,
    PagesModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [RouterModule],
})
export class SharedModule {}
