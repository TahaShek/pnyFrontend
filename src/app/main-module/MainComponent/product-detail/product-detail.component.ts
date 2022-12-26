import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Shared/Service/product.service';
import { ProductInterface  } from 'src/app/Shared/Interface/product-interface';
import { BUTTONTEXT } from 'src/app/Shared/enums/button-text';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public productObject:ProductInterface|any={}
Url='http://localhost:1111/'
public SelectedSize:any=[]
public selectedQuantity:Number|any=0
public stockQuantity:any
public enumButtonText=BUTTONTEXT


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

getSizes(event:any){
if(event.target.checked){
  this.SelectedSize.push(event.target.value)
}
else{
  this.SelectedSize=this.SelectedSize.filter((value:any)=>value!=event.target.value)
}
}


decrementQuantity(){
  if(this.selectedQuantity>0){
    this.selectedQuantity --;
  }
}

incrementQuantity(){
  if(this.selectedQuantity===0 || this.selectedQuantity<6){
this.selectedQuantity++
  }
}
}



