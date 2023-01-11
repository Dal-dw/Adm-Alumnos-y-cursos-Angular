import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyMaterialModule } from '../modules/my-material.module';

@NgModule({
  declarations: [HeaderComponent, PageWrapperComponent, ToolbarComponent],
  imports: [CommonModule, MyMaterialModule],
  exports: [HeaderComponent, PageWrapperComponent, ToolbarComponent],
})
export class LayoutModule {}
