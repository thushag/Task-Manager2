import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskAddComponent } from './Components/task-add/task-add.component';
import { TaskEditComponent } from './Components/task-edit/task-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
   TaskAddComponent,
    TaskEditComponent,
    UserAddComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
