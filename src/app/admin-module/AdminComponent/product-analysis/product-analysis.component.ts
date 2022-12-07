import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProductService } from 'src/app/Shared/Service/product.service';

@Component({
  selector: 'app-product-analysis',
  templateUrl: './product-analysis.component.html',
  styleUrls: ['./product-analysis.component.css']
})

export class ProductAnalysisComponent implements OnInit {
product:any=[]
UpdateForm:FormGroup|any
Url='http://localhost:1111/'
MY_ID:any
ParticularProductDataArray:any=[]

  constructor(private service:ProductService,private toaster:ToastrService,private formBuilder:FormBuilder) { 
    this.UpdateFormModel()
  }

  ngOnInit(): void {
    this.PopulateArrya()
  }

// updatefrom MODEL 
UpdateFormModel(){
  this.UpdateForm=this.formBuilder.group({
    productName:new FormControl('',[Validators.required,Validators.minLength(6)]),
    Quantity:new FormControl('',[Validators.required,]),
    flavour:new FormControl('',[Validators.required,Validators.minLength(6)]),
     price:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
     description:new FormControl('',[Validators.required,Validators.minLength(25)]),
  })
}



// getting data in table 
  PopulateArrya(){
    this.service.GetProductApi().subscribe((res:any)=>{
      res.result.forEach((element:any) => {
        if(element.softDeleteStatus!==1){
          this.product.push(element)
        }
      });
    })
  }


// data of update 
getData(_id:any){
this.MY_ID=_id
this.service.GetParticularDataByid(_id).subscribe((res:any)=>{
this.ParticularProductDataArray=res.result
this.UpdateForm=this.formBuilder.group({
  productName:new FormControl(this.ParticularProductDataArray.productName,[Validators.required]),
  Quantity:new FormControl(this.ParticularProductDataArray.Quantity,[Validators.required,]),
  flavour:new FormControl(this.ParticularProductDataArray.flavour,[Validators.required]),
   price:new FormControl(this.ParticularProductDataArray.price,[Validators.required]),
   description:new FormControl(this.ParticularProductDataArray.description,[Validators.required])
})
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

  // hard delete 
  HardDelete(_id:any){
this.service.HardDelete(_id).subscribe((res:any)=>{
  this.toaster.error(res.message)
})
  }

  updateSubmit(){
  let payload=this.UpdateForm.value
  payload['_id']=this.MY_ID
  this.service.UpdateProductData(payload).subscribe((res:any)=>{
    this.toaster.success(res.message)
    this.getData(this.MY_ID)
  })
  }
  


}
