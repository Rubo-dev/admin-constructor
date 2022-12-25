import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [SidebarComponent, WrapperComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, SidebarModule, ButtonModule, ComponentsModule],
})
export class SharedModule {}
