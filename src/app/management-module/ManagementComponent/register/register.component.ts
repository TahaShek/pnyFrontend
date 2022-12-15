import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm:FormGroup|any


  constructor(private FormBUilder:FormBuilder,) { }

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

  }

}
