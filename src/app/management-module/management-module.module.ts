import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { LoginComponent } from './ManagementComponent/login/login.component';
import { RegisterComponent } from './ManagementComponent/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModuleModule { }
