import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  data=[
    {
      SNo:1,
      ProductName:'Iphone',
      ProductCode:'101'
    },
    {
      SNo:2,
      ProductName:'Samsung',
      ProductCode:'102'
    },
    {
      SNo:3,
      ProductName:'Xaomi',
      ProductCode:'103'
    },
    {
      SNo:4,
      ProductName:'OnePlus',
      ProductCode:'104'
    },
    {
      SNo:5,
      ProductName:'Nokia',
      ProductCode:'105'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
