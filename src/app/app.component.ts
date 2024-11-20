import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CartServiceService } from './cart-service.service';
import { AuthServiceService } from './auth-service.service';
import {  ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  


})
export class AppComponent implements OnInit, OnChanges {
  title = 'SneakIN';
  counter: any;
  @Input() user:any;
  name:any
  showNavAndFooter: boolean = true;
  currentNav:any='home'
  selectednav(nav:any){
    this.currentNav=nav;
  }
  constructor(private CartServiceService: CartServiceService,private authService:AuthServiceService,private route:ActivatedRoute,private router:Router,private cdr:ChangeDetectorRef ) {
    
      this.user=localStorage.getItem('user')
    this.user=JSON.parse(this.user)
    this.name=this.user?.name
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        
        // Hide navbar and footer on login route
        this.showNavAndFooter =!['/login','/signup'].includes(event.url);
        
        console.log(event.url)
      }
    });
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.ngOnInit()
      console.log("in ngChanges")
      

    }
    if(changes[this.user]){
      console.log("in app ngCHanges")
      this.router.navigateByUrl('app')
    }
  }
  ngOnInit(): void {
    this.currentNav =  this.router.url
    this.counter = this.CartServiceService.cart_count;
    this.checkLoginStatus()
    console.log("in app component")

    this.user=localStorage.getItem('user')
    this.user=JSON.parse(this.user)
    this.name=this.user?.name
    // this.CartServiceService.getAdmin().subscribe(x => {
    //   let y = x.find((z: any) => z.id == 1)
    //   this.counter = y.cartItem.length;

    // })
    this.CartServiceService.dataChange.subscribe((updatedData: any) => {
      this.counter = updatedData;  // Update data in Component B when it changes
    });


  }

login(){
  this.ngOnInit()
  this.router.navigateByUrl("login")
  this.checkLoginStatus()
  
}

logout(){
  this.ngOnInit()
  this.authService.logout()
  this.router.navigateByUrl("")
  localStorage.removeItem('user')
  this.ngOnInit()
 
}
checkLoginStatus() {
  this.user = !!localStorage.getItem('user');
  this.cdr.detectChanges();  // Trigger change detection manually
}






}
