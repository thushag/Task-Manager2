import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './Components/task-add/task-add.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskEditComponent } from './Components/task-edit/task-edit.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  {path:'add',component: TaskAddComponent},
  {path : 'tasks' , component : TaskListComponent},
  {path:'edit/:id',component:TaskEditComponent},
  {path:'users',component:UserListComponent},
  {path:'user-add',component:UserAddComponent},
  // {path:'user-edit/:id',component:UserAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
