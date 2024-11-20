import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent implements OnInit{
  id:any;
  i:any;
  product:any={}
  products:any[]=[];
  constructor(private dbService:DbServiceService){}

  ngOnInit(): void {
      this.dbService.getProoduct().subscribe(x=>this.products=x)
  }

  saveProduct(){
    return this.dbService.postProduct(this.product).subscribe(x=> {this.ngOnInit()
  this.product={}})
  }

  deleteProduct(id:any){
    return this.dbService.deleteProduct(id).subscribe(x=> this.ngOnInit())
  }

  editProduct(id:any,i:any){
    let t =this.products[i];
    this.product={...t}
    this.id=id
    this.i=i
  }
  updateProduct(){
    return this.dbService.putProduct(this.id,this.product).subscribe((x)=>{this.ngOnInit();
      this.product={}
    })
  }
}
