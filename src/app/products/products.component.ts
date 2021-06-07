import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  opened=true
  data=[
    {
      ProductName:'Iphone 11',
      ProductCode:101
    },
    {
      ProductName:'Samsung M31',
      ProductCode:102
    },
    {
      ProductName:'Xaomi Note',
      ProductCode:103
    },
    {
      ProductName:'OnePlus 8T',
      ProductCode:104
    },
    {
      ProductName:'HTC Desire',
      ProductCode:105
    },
    {
      ProductName:'Blackberry',
      ProductCode:106
    },
    {
      ProductName:'Lenova',
      ProductCode:107
    },
    {
      ProductName:'Samsung A50',
      ProductCode:108
    },
    {
      ProductName:'Iphone 12',
      ProductCode:109
    },
    {
      ProductName:'Redmi',
      ProductCode:110
    }
  ]

  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(DialogComponent)
  }


  ngOnInit(): void {
  }

}
