import { Component, Input, OnChanges, OnInit, SimpleChanges,ChangeDetectorRef, DoCheck } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { CartServiceService } from '../cart-service.service';
import { CommonModule } from '@angular/common';
import { WindowRefService } from '../window-ref.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  standalone:true,
  imports:[CommonModule],
  providers: [WindowRefService]
  
})
export class CheckoutComponent implements OnInit,DoCheck{

cartUser:any={}
cartItems:any[]=[]
cartProducts:any[]=[]
total:any;
item:{[productId:string]:{size:any}}={}
products:{[productId:string]:{name:any; price:any; category: any; url:any;size:any}[]}={}
t:any={}
user:User=new User("","","","",[])
size:any={}




constructor(private dbService:DbServiceService,private cartService:CartServiceService,private changeDetector: ChangeDetectorRef,private winRef:WindowRefService,private userService:UserServiceService){
  
}

ngDoCheck(): void {
  if(this.cartProducts!==null){
    this.calculateTotal()
  }
}


ngOnInit(): void {

  this.t = localStorage.getItem('user')
  this.t=JSON.parse(this.t)

  this.cartService.getCartItem().subscribe(cartItem=>{
    this.cartItems=cartItem.filter((x:any)=>x.coustomerId==this.t.id)
  })

  this.userService.getUser().subscribe(users=>{
    this.user=users.find((x:any)=>x.id==this.t.id)
    //this.cartItems=this.user?.cartItem




    // Object.keys(this.user.item).forEach((productId)=>{
    //   console.log(this.user.item)
    
    //   const sizes = this.user.item[productId];
    //   // Store sizes in the desired format for each product ID
    //   this.item[productId] = { size: sizes };
    // })



  })
  this.dbService.getProoduct().subscribe(x=>{ this.cartProducts=x;
    this.cartProducts=this.cartProducts.filter(p=>this.cartItems.includes(p.id))
    
    
  
    this.addProduct()

    Object.keys(this.products).forEach((productId)=>{
      const size=this.item[productId]
      this.products[productId].forEach((product) => {
        product.size=this.item[productId].size
      });
    })

  });

  this.changeDetector.detectChanges();
  // this.cartService.getAdmin().subscribe(x=> {
  //   this.cartUser=x.find((x:any)=>x.id==1)
  //   this.cartItems=this.cartUser?.cartItem
    
  //    this.dbService.getProoduct().subscribe(x=>{ this.cartProducts=x;
  //      this.cartProducts=this.cartProducts.filter(p=>this.cartItems.includes(p.id))

  //   })
  // })
    
}
calculateTotal(): void {
  this.total = this.cartItems.reduce((sum, product) => Number(sum) + Number(product.productPrice), 0);
}

addProduct(){
  console.log("inside produc")
  this.cartProducts.forEach((p)=>{
    if(!this.products[p.id]){
      this.products[p.id]=[]
    }
    this.products[p.id].push({
      name: p.name,
      category: p.category,
      url: p.url,
      size: null,
      price: p.price
    });


    const updateproduct=Object.keys(this.products).map((productId)=>{
      const product=this.products[productId]
      if(this.item[productId]){}
    })
  })
  
}






getProductentries(){
  return Object.entries(this.products)
}





deleteProductFromCart(id:any){
  this.user.cartItem=this.user.cartItem.filter((item:any)=>item !== id)
  this.cartProducts=this.cartProducts.filter((item:any)=>item !== id)
  



  return this.cartService.deleteCartItem(id).subscribe(x=>this.ngOnInit())
  

}


payWithRazor() {
  const options: any = {
    key: 'rzp_test_q5C9LVoOiHddle',
    amount: (this.total*100), // amount should be in paise format to display Rs 1255 without decimal point
    currency: 'INR',
    name: '', // company name or product name
    description: '',  // product description
    image: './assets/logo.png', // company logo or product image
   // order_id: val, // order_id created by you in backend
    modal: {
      // We should prevent closing of the form when esc key is pressed.
      escape: false,
    },
    notes: {
      // include notes if any
    },
    theme: {
      color: '#0c238a'
    }
  };
  options.handler = ((response:any, error:any) => {
    options.response = response;
    console.log(response);
    console.log(options);
    // call your backend api to verify payment signature & capture transaction
  });
  options.modal.ondismiss = (() => {
    // handle the case when user closes the form while transaction is in progress
    console.log('Transaction cancelled.');
  });
  const rzp = new this.winRef.nativeWindow.Razorpay(options);
  rzp.open();
}


}
