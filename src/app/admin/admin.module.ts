import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
