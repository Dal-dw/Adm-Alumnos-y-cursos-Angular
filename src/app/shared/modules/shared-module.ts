import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from './my-material.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MyMaterialModule, PagesModule, ReactiveFormsModule],
  exports: [PagesModule],
})
export class SharedModule {}
