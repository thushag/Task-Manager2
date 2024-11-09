import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserServiceService } from '../../service/user-service.service';
import { timeout } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
    searchText: string = '';
    users: User[] = [];


    constructor(
      private userService: UserServiceService,
      private router:Router,
      private toastr:ToastrService){

      }
      
  ngOnInit():void{
    this.loadUser();
  }

  onDelete(userId: number){
    if(confirm('Do you want to delete')){
      this.userService.deleteUser(userId).subscribe(data => {
        this.toastr.success('User is deleted',"Deleted",{
          timeOut: 10000,
          closeButton: true
        });
        this.loadUser();
      });
    }
  }

loadUser() {
  this.userService.getUsers().subscribe((data: User[]) => {
    this.users = data;
  });
}

onEdit(userId: number){
  this.router.navigate(['user-edit',userId])
}
}
