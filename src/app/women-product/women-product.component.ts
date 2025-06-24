import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrl: './women-product.component.css',
  standalone:true,
  imports:[CommonModule,RouterModule]

})
export class WomenProductComponent implements OnInit{

  constructor(private dbService:DbServiceService){}
  products:any[]=[];
  womenp:any[]=[];

  ngOnInit(): void {
      this.dbService.getProoduct().subscribe((x)=>{
        this.products=x;
        this.womenp=this.products.filter((x)=>x.category !== 'Men')

      })
  }


}
