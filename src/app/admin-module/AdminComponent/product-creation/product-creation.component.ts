import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Service/product.service';
// import { an } from 'chart.js/dist/chunks/helpers.core';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
SelectSize=['2KG','4KG','6KG'];
category=['Protien Shakes','protien Bar']
newSizeArray:any=[]
newImageArray:any=[]
button:boolean=true
@ViewChild('fileSelect') fileSelect:ElementRef|any
@ViewChildren('checkbox') checkbox:QueryList<ElementRef> | undefined;
// disablebtn:boolean=true
// unselect(){
//   this.checkbox.forEach((element:any) => {
    // element.nativeElement.checked=false
    
//   });
// }
slect(){
  this.checkbox?.forEach((element)=>{
    element.nativeElement.checked=false

  })
}

ProductCreateForm:FormGroup|any
  constructor(private formbuilder:FormBuilder,private toaster:ToastrService,private ProductService:ProductService) {
    this.FormModel()
   }

  ngOnInit(): void {
  }
FormModel(){
  this.ProductCreateForm=this.formbuilder.group({
 productName:new FormControl('',[Validators.required,Validators.minLength(6)]),
Quantity:new FormControl('',[Validators.required,]),
 flavour:new FormControl('',[Validators.required,Validators.minLength(6)]),
 price:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
 description:new FormControl('',[Validators.required,Validators.minLength(25)]),
 categories:new FormControl('',[Validators.required]),
 size:new FormArray([])
  })
}
// get size lgoic
getSize(event:any){
if(event.target.checked){
  this.newSizeArray.push(event.target.value)
}
else{
  this.newSizeArray=this.newSizeArray.filter((value:any)=>value!=event.target.value)
}
}
// get size lgoic

// get images
getImages(event:any){
  let fielsLength=event.target.files.length;
  if(event.target.files.length<=5){
    [...event.target.files].forEach(element => this.newImageArray.push(element) );
  }
  else{
    this.newImageArray=[]
    this.toaster.error(`limit is five you have selected ${fielsLength}`)
    this.fileSelect.nativeElement.value=null
    
    
  }
}
// get images

submitForm(){
  
  this.newSizeArray.forEach((element:string) => {
    let formControl=new FormControl(element);
    this.ProductCreateForm.get("size").push(formControl)
  });

let MultipartFormData=new FormData();
MultipartFormData.append('productName',this.ProductCreateForm.get('productName').value)

    MultipartFormData.append('Quantity', this.ProductCreateForm.get('Quantity').value);
    MultipartFormData.append('price', this.ProductCreateForm.get('price').value);
    MultipartFormData.append('description', this.ProductCreateForm.get('description').value);
    MultipartFormData.append('flavour', this.ProductCreateForm.get('flavour').value);
    MultipartFormData.append('categories', this.ProductCreateForm.get('categories').value);
    MultipartFormData.append('size', this.ProductCreateForm.get('size').value);
    
    this.newImageArray.forEach((imagedata:any)=>{
  MultipartFormData.append('images',imagedata)
    })
    let formvalue=this.ProductCreateForm.value

this.ProductService.CreateApi(MultipartFormData).subscribe((res:any)=>{
  this.toaster.success(res.message)
  let productSize=this.ProductCreateForm.get('size')
  productSize.clear()
  this.ProductCreateForm.reset()
  this.newSizeArray=[ ]
  this.slect()
  // this.checkbox?.forEach((element)=>{
  //   element.nativeElement.checked = false;

  // })
  // this.unselect()
  this.fileSelect.nativeElement.value=null
  this.newImageArray=[]


})    


    // this.newSizeArray=['']

}



// validatons  get 
get productName(){
  return this.ProductCreateForm.get('productName')
}

get Quantity(){
  return this.ProductCreateForm.get('Quantity')
}
get flavour(){
  return this.ProductCreateForm.get('flavour')
}
get price(){
  return this.ProductCreateForm.get('price')
}
get description(){
  return this.ProductCreateForm.get('description')
}
get categories(){
  return this.ProductCreateForm.get('categories')
}

}
