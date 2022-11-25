import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { an } from 'chart.js/dist/chunks/helpers.core';

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
// disablebtn:boolean=true

ProductCreateForm:FormGroup|any
  constructor(private formbuilder:FormBuilder) {
    this.FormModel()
   }

  ngOnInit(): void {
  }
FormModel(){
  this.ProductCreateForm=this.formbuilder.group({
 productName:new FormControl('',[Validators.required,Validators.minLength(6)]),
 productQuantity:new FormControl('',[Validators.required,]),
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
    [...event.target.files].forEach((element:any) => {
      this.newImageArray.push(element)
    });
  }
  else{
    this.newImageArray=[]
    alert(`limit is five you have selected ${fielsLength}`)
    
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

    MultipartFormData.append(' productQuantity', this.ProductCreateForm.get('productQuantity').value);
    MultipartFormData.append('price', this.ProductCreateForm.get('price').value);
    MultipartFormData.append('description', this.ProductCreateForm.get('description').value);
    MultipartFormData.append('flavour', this.ProductCreateForm.get('flavour').value);
    MultipartFormData.append('categories', this.ProductCreateForm.get('categories').value);
    MultipartFormData.append('size', this.ProductCreateForm.get('size').value);
    
    this.newImageArray.forEach((images:any)=>{
  MultipartFormData.append('images',images)
    })

}



// validatons  get 
get productName(){
  return this.ProductCreateForm.get('productName')
}

get productQuantity(){
  return this.ProductCreateForm.get('productQuantity')
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
