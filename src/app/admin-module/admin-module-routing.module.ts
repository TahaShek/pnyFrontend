import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './AdminComponent/dashboard/dashboard.component';
import { ProductCreationComponent } from './AdminComponent/product-creation/product-creation.component';
import { ProductShowComponent } from './adminComponent/product-show/product-show.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,children:[
  {path:'dash',component:DashboardComponent},
  {path:'procuctForm',component:ProductCreationComponent},
  {path:'productshow',component:ProductShowComponent}
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
