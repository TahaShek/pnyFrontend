import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Service/product.service';

@Component({
  selector: 'app-product-analysis',
  templateUrl: './product-analysis.component.html',
  styleUrls: ['./product-analysis.component.css']
})

export class ProductAnalysisComponent implements OnInit {
product:any=[]
Url='http://localhost:1111/'

  constructor(private service:ProductService,private toaster:ToastrService) { }

// getting data in table 

  ngOnInit(): void {
    this.PopulateArrya()
  }
  PopulateArrya(){
    this.service.GetProductApi().subscribe((res:any)=>{
      res.result.forEach((element:any) => {
        if(element.softDeleteStatus!==1){
          this.product.push(element)
        }
      });
    })
  }
  // soft delete 
  softDelete(_id:any){
    this.service.SoftDelete(_id).subscribe((res:any)=>{
        this.toaster.error(res.message)
        this.product=[]
        this.PopulateArrya()
    })
  }

  HardDelete(_id:any){
this.service.HardDelete(_id).subscribe((res:any)=>{
  this.toaster.error(res.message)
})
  }

}
