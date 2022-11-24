import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
SelectSize=['2KG','4KG','6KG'];
category=['Protien Shakes','protien Bar']
  constructor() { }

  ngOnInit(): void {
  }

}
