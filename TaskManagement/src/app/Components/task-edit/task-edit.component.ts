import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskServiceService } from '../../service/task-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit{

  taskId:number;
  taskForm:FormGroup;
  Task?:Task;

constructor(private route:ActivatedRoute, private taskService: TaskServiceService,
  private fb: FormBuilder, private router:Router)
{
  const tid = this.route.snapshot.paramMap.get("id");
    this.taskId = Number(tid);


  this.taskForm = this.fb.group({
    id: [''],
    title: ['', [Validators.required]],
    description: [''],
    dueDate: [''],
    priority: ['', [Validators.required]],
  })
}
ngOnInit(): void {
  this.taskService.getTask(this.taskId).subscribe(data => {
console.log(data)
this.taskForm.patchValue(data)                                      
  
   
  });
}
cancel() {
 this.router.navigate(['/'])
}


onSubmit() {
  const task = this.taskForm.value;

  this.taskService.updateTask(task).subscribe(data => {
    console.log(data);
   alert("Task is updated successfully");
    this.router.navigate(["/"]);
  });
}
}
