import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './button/button.component';
import { ButtonModule } from 'primeng/button';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [BlocksComponent, InputComponent],
  imports: [CommonModule, ButtonModule],
  exports: [BlocksComponent,InputComponent],
})
export class ComponentsModule {}
