import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { BlogComponent } from './MainComponent/blog/blog.component';
import { ContactComponent } from './MainComponent/contact/contact.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ShopComponent } from './MainComponent/shop/shop.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'shop',component:ShopComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
