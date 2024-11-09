import { Component } from '@angular/core';
import { TaskServiceService } from '../../service/task-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  taskForm:FormGroup;
  constructor(private fb:FormBuilder, private taskservice:TaskServiceService,private router:Router)
  {
    this.taskForm = this.fb.group({

      title:[''],
      description:[''],
      dueDate:[''],
      priority:['Medium'],

    })
  }
  OnSubmit(){
    let task = this.taskForm.value;
    console.log(task)
    this.taskservice.createTask(task).subscribe(data => {
      this.router.navigate(['/'])
    });
  }
  cancel(){
    this.taskForm.reset();
    this.router.navigate(['/'])
  }
  
}
