import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { CartServiceService } from '../cart-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AuthServiceService } from '../auth-service.service';
import { User } from '../user';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
  standalone:true,
  imports: [CommonModule,RouterModule,MatIconModule]
})
export class MainpageComponent implements OnInit {
  id:any;
  cartProduct:any[]=[]
  currentUser:any={}
  product:any={}
  products:any[]=[];
  randomProducts:any[]=[]
  cartItems:any[]=[]
  cartProducts:any[]=[]
  
  
  t:any
  user!:User;
  item:any[]=[]

  cartProductNumebr:any=0;
  constructor(private dbService:DbServiceService,private cartService:CartServiceService,private userService:UserServiceService,private authService:AuthServiceService){
   
    
  }

  ngOnInit(): void {
      this.dbService.getProoduct().subscribe(x=>this.products=x);
      this.t=localStorage.getItem('user')
      this.t=JSON.parse(this.t)
      
  
      this.userService.getUser().subscribe(user=>{
        this.user=user.find((x:any)=>x.id==this.t?.id);
      })





      // this.cartService.getAdmin().subscribe(admins=>{
      //   this.currentUser=admins.find((x:any)=>x.id ==1);
      //   this.cartItems=this.currentUser?.cartItem
      //   this.dbService.getProoduct().subscribe(x=>{this.cartProducts=x;
      //     this.cartProducts=this.cartProducts.filter(p=>this.cartItems.includes(p.id))
      //   })
      // })
  } 



  saveProduct(){
    return this.dbService.postProduct(this.product).subscribe(x=> {this.ngOnInit()
  this.product={}})
  }

  deleteProduct(id:any){
    return this.dbService.deleteProduct(id).subscribe(x=> this.ngOnInit())
  }

  // addtocart(id:any,i:any){
  //   this.id=id
  //   this.cartProduct.push(this.products[i]);
  //   this.currentUser?.cartItem.push(this.id);
  //   this.cartProductNumebr=this.cartProductNumebr+1
  //   return this.cartService.putAdmin(1,this.currentUser).subscribe(x=> this.ngOnInit())
    
  // }
}