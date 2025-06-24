import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basketball-section',
  templateUrl: './basketball-section.component.html',
  styleUrl: './basketball-section.component.css',
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class BasketballSectionComponent implements OnInit {
products:any[]=[]
baskateballShoes:any[]=[]

constructor(private dbService:DbServiceService){}

ngOnInit(): void {
    this.dbService.getProoduct().subscribe(x=>{this.products=x;
      this.baskateballShoes=this.products.filter((x)=>x.category==="BaskateBall")
    })
}
}
