import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './button/button.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { ImageComponent } from './image/image.component';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonItemComponent } from './button/button-item/button-item.component';
import { ButtonFormComponent } from './button/button-form/button-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormValidatorPipe } from '../pipes/form-validator.pipe';
import { ImageFormComponent } from './image/image-form/image-form.component';
import { ImageItemComponent } from './image/image-item/image-item.component';
import { ListFormComponent } from './list/list-form/list-form.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { TextItemComponent } from './text/text-item/text-item.component';
import { TextFormComponent } from './text/text-form/text-form.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    ListFormComponent,
    ButtonFormComponent,
    ImageItemComponent,
    ImageComponent,
    ListComponent,
    ListItemComponent,
    ButtonItemComponent,
    ImageFormComponent,
    MenuComponent,
    MenuItemComponent,
    MenuFormComponent,
    TextItemComponent,
    TextFormComponent,
    TextComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormValidatorPipe,
    RippleModule,
    AccordionModule,
    DialogModule,
    FileUploadModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  exports: [
    ButtonsComponent,
    ButtonFormComponent,
    ListFormComponent,
    ImageItemComponent,
    FormValidatorPipe,
    ImageComponent,
    ListComponent,
    ImageFormComponent,
    MenuComponent,
    MenuFormComponent,
    TextItemComponent,
    TextFormComponent,
    TextComponent,
  ],
})
export class ComponentsModule {}
