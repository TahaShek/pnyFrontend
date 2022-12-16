import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productService:ProductService,private toast:ToastrService) { }
  Url='http://localhost:1111/'
  product:any=[]

  ngOnInit(): void {
    this.productService.GetProductApi().subscribe((res:any)=>{
      this.product=res.result
    this.toast=res.message
     })
  }

}
