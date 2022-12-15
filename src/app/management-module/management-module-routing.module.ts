import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModuleComponent } from './management-module.component';
import { LoginComponent } from './ManagementComponent/login/login.component';
import { RegisterComponent } from './ManagementComponent/register/register.component';

const routes: Routes = [{ path: '', component: ManagementModuleComponent,children:[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
