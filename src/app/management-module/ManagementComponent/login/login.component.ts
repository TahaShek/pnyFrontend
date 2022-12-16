import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/Shared/Service/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup|any
  constructor(
    private formbuilder:FormBuilder,
    private service:UserManagementService,
    private router:Router
  ) {
    this.FormModel()
   }

  ngOnInit(): void {
  }
  FormModel(){
    this.LoginForm=this.formbuilder.group({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }



  SubmitForm(){
    let loginValues=this.LoginForm.value
    this.service.UserLogin(loginValues).subscribe((res:any)=>{
      this.service.setTokenStorage(res.Token);
      if(res.UserPrivilege==='Admin'){
        this.router.navigate(['/adminModule'])

      }
      else{
        this.router.navigate([''])
      }
    })



  }
}
