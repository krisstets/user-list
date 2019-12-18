import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DeleteModalWindowComponent } from './components/delete-modal-window/delete-modal-window.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [UsersComponent, DeleteModalWindowComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
