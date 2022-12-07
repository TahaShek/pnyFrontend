import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  CreateApi(payload:any){
    return this.http.post(`http://localhost:1111/ProductDataToDatabase/ProductData`,payload)

  }
   GetProductApi(){
    return this.http.get(`http://localhost:1111/ProductDataToDatabase/GetData`)
   }

   SoftDelete(_id:any){
       return this.http.delete(`http://localhost:1111/ProductDataToDatabase/SoftDelete/${_id}`)
   }

   HardDelete(_id:any){
    return this.http.delete(`http://localhost:1111/ProductDataToDatabase/HardDelete/${_id}`)
}
GetParticularDataByid(_id:any){
  return this.http.get(`http://localhost:1111/ProductDataToDatabase/GetParticularProductData/${_id}`)

}

UpdateProductData(payload:any){

return this.http.post(`http://localhost:1111/ProductDataToDatabase/UpdateProductById`,payload)

}

}
// UpdateProductById