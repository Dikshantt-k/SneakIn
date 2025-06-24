import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrl: './men-product.component.css',
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class MenProductComponent implements OnInit{
  products:any[]=[]
  menp:any[]=[]

  constructor(private dbService:DbServiceService){}
  ngOnInit(): void {
      this.dbService.getProoduct().subscribe(x=>{this.products=x;
      this.menp=this.products.filter((x)=>x.category !=="Women");

    })
  }
}
