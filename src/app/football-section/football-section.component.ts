import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-football-section',
  templateUrl: './football-section.component.html',
  styleUrl: './football-section.component.css',
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class FootballSectionComponent implements OnInit{

products:any[]=[]
footballShoes:any[]=[]

constructor(private dbService:DbServiceService){}
ngOnInit(): void {
    this.dbService.getProoduct().subscribe(x=>{this.products=x;
      this.footballShoes=this.products.filter((x)=>x.category==="Football")
    })
}

}
