import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './AdminComponent/dashboard/dashboard.component';
import { ProductCreationComponent } from './AdminComponent/product-creation/product-creation.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,children:[
  {path:'dash',component:DashboardComponent},
  {path:'procuctForm',component:ProductCreationComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
