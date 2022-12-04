import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Service/product.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  constructor(private productService:ProductService,private toast:ToastrService) { }
  product:any=[]
Url='http://localhost:1111/'
  ngOnInit(): void {
 this.productService.GetProductApi().subscribe((res:any)=>{
  this.product=res.result
this.toast=res.message
 })
  }

}
