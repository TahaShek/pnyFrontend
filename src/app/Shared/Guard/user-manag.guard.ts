import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../Service/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagGuard implements CanActivate {
  constructor(private readonly Router:Router,private readonly serive:UserManagementService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if (!this.serive.checkUserLogin()) {
        this.Router.navigate(['/ManagementModule/login']);
        return false;
      } else {
        return true;
      }
  }
  
}
