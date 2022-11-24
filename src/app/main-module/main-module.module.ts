import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './MainComponent/header/header.component';
// import { HeadeComponent } from './MainComponent/heade/heade.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { BlogComponent } from './MainComponent/blog/blog.component';
import { ShopComponent } from './MainComponent/shop/shop.component';
import { ContactComponent } from './MainComponent/contact/contact.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    // HeadeComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
