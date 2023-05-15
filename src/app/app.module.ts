import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { GridsterModule } from 'angular-gridster2';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { PrimeTemplate } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    LayoutItemDirective,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    GridsterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    DialogModule,
    ComponentsModule,
  ],
})
export class AppModule {}
