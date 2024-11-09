import { Component, OnInit } from '@angular/core';
import { Task, TaskServiceService } from '../../service/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  searchText:string = '';

  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService, private router: Router){
    
  }
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    })
  }

  onDelete(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(data => {
      alert("Task is deleted successfully");
    })
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    })

  }
  onEdit(taskId: number) {
    this.router.navigate(['/edit', taskId])
  }
}
