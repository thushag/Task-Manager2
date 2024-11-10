import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  isEditMode = false;
  userId: number = 0;

  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

      const uid = this.route.snapshot.paramMap.get('id');
      if (uid) {
        this.userId = Number(uid);
        this.isEditMode = true;
      }

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      password: [''],
      phone: ['', [Validators.required]]
      // address: this.fb.group({
      //   addressLine1: ['', [Validators.required]],
      //   addressLine2: [''],
      //   city: ['']
      // })
    });
  }
  
 ngOnInit(): void {

  if (this.isEditMode) {
    this.userService.getUser(this.userId).subscribe(data => {
      this.userForm.patchValue(data);
    }, (error) => {
      this.toastr.warning("User is not found!: " + error.error.title);
    });
  }


}

onSubmit() {
  let user = this.userForm.value;

  if (this.isEditMode == true) {
    user.id = this.userId;
    this.userService.updateUser(user).subscribe((data) => {
      this.toastr.success("User is updated successfully");
      this.router.navigate(["/users"]);
    });
  } else {
    this.userService.createUser(user).subscribe(data => {
      this.toastr.success("User is created successfully");
      this.router.navigate(["/users"]);
    });
  }


}

cancel() {
  this.userForm.reset();
}

}
