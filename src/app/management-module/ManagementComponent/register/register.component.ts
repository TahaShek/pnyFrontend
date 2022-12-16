import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserManagementService } from 'src/app/Shared/Service/user-management.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm:FormGroup|any


  constructor(
    private FormBUilder:FormBuilder,
    private registerService:UserManagementService,
   private toaster:ToastrService
    ) 
    {
this.UserFormModel()
    }

  ngOnInit(): void {
  }

  UserFormModel(){
    this.RegisterForm=this.FormBUilder.group({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }


  UserSubmit(){
    let userFormValues=this.RegisterForm.value
this.registerService.UserRegistration(userFormValues).subscribe((res:any)=>{
  res;
this.toaster.success(res.message)
})
this.RegisterForm.reset()
  }

}
