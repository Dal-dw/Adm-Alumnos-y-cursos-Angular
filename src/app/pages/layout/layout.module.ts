import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyMaterialModule } from '../../shared/modules/my-material.module';

import { SharedModule } from '../../shared/modules/shared-module';

//import { SharedModule } from '../modules/shared-module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [HeaderComponent, PageWrapperComponent, ToolbarComponent],
  imports: [CommonModule, MyMaterialModule, LayoutRoutingModule],
  exports: [HeaderComponent, PageWrapperComponent, ToolbarComponent],
})
export class LayoutModule {}
