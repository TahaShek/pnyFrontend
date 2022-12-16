import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Shared/Service/product.service';
import { ProductInterface  } from 'src/app/Shared/Interface/product-interface';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public productObject:ProductInterface|any
  constructor(
    private readonly ActivatedRoute:ActivatedRoute,
    private readonly ProductService:ProductService
    ) { }

  ngOnInit(): void {
    this.GetRouterParameterandGetData()
  }

  // ye id le kr a rha jis sae sari detail ani product ki 
// GetRouterParameter(){
// const productId=this.ActivatedRoute.snapshot.paramMap.get("id")
// console.log(productId)
// }
GetRouterParameterandGetData  (){
  const parameterId=this.ActivatedRoute.snapshot.params['id']
     this.ProductService.GetParticularDataByid(parameterId).subscribe((res:any)=>{
      this.productObject=res.result
     })
}
}



