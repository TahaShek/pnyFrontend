import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItemInLocalStorage(data:any){
    localStorage.setItem('addToCart',JSON.stringify(data))
  }


  getFromCart(){
    return JSON.parse(localStorage.getItem('addToCart') || 'null')
  }
}
