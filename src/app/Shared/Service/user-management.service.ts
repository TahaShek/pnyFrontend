import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private readonly http:HttpClient) { }

  UserRegistration(payload:any){
    return this.http.post(`http://localhost:1111/UserRegistration/UserRegister`,payload)
  }
  UserLogin(payload:any){
    return  this.http.post(`http://localhost:1111/UserRegistration/UserLogin`,payload)
  }

  setTokenStorage(payload:any){
    localStorage.setItem('accessToken',payload)
  }

  checkUserLogin(){
    return localStorage.getItem('accessToken')!==null
  }
}
