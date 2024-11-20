import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Item } from '../item';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  standalone:true,
  imports:[CommonModule]
  

})
export class ProductPageComponent  implements OnInit,OnChanges{
  currentUser:any={}
  product:any={};
  id:any;
  category:any;
  t:any
  user:User=new User("","","","",[],{})
  size:any;
cartItem:Item=new Item()

  //item:{[productId:string]:{size:any}[]}={}

  constructor(private dbService:DbServiceService , private rout:ActivatedRoute, private cartService:CartServiceService,private userService:UserServiceService){

   
  }
ngOnChanges(changes: SimpleChanges): void {
  this.cartService.cart_count=this.currentUser.cartItem.length
}
  ngOnInit(): void {
    this.t=localStorage.getItem('user')
    this.t=JSON.parse(this.t)

    this.userService.getUser().subscribe(user=>{
      this.user=user.find((x:any)=>x.id==this.t.id)
    })

    let productId=this.rout.snapshot.paramMap.get('id')
    this.id=productId
    this.product=this.dbService.getProductById(productId).subscribe(x=>this.product=x);
    this.category=this.product?.category
  
  }
  addProductTocart(id:any){
    this.cartItem={
      coustomerId:this.user?.id,
      productId:id,
      productName:this.product?.name,
      productPrice:this.product?.price,
      productCategory:this.product?.category,
      productUrl:this.product?.url,
      productSize:this.size
    }
    this.cartService.postCartItem(this.cartItem).subscribe(x=>{this.ngOnInit();
      this.cartItem={
        coustomerId:"",
        productId:"",
        productName:"",
        productPrice:"",
        productCategory:"",
        productUrl:"",
        productSize:""
      }
    })
    }
    erroralert(){
      alert(
        "Please select Shoes size"
      )
    }
    
    
    // this.cartDb.putAdmin(1,this.currentUser).subscribe(x=>{
    //   this.cartDb.updateData(x.cartItem.length)
    //   alert("Product added to cart !!!")
      
    //   this.ngOnInit()})

   
  

  shoeSize(id:number){
    this.size=id
   
  }

}
