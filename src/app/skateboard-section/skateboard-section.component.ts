import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skateboard-section',
  templateUrl: './skateboard-section.component.html',
  styleUrl: './skateboard-section.component.css',
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class SkateboardSectionComponent implements OnInit{
  products:any[]=[]
  skateShoes:any[]=[]

  constructor(private dbService:DbServiceService){}

  ngOnInit(): void {
      this.dbService.getProoduct().subscribe(x=>{this.products=x;
        this.skateShoes=this.products.filter((x)=>x.category==="Skateboard")
      })
  }
}
