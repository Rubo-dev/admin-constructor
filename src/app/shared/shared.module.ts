import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RippleModule } from 'primeng/ripple';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [SidebarComponent, WrapperComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, SidebarModule, ButtonModule, RippleModule, ComponentsModule],
})
export class SharedModule {
}
