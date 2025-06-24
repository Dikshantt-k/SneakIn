import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

  
})
export class NavbarComponent  implements OnInit,OnChanges{
  counter: any;
  @Input() user:any;
  name:any
  showNavAndFooter: boolean = true;
  width:any;
  

  constructor(private CartServiceService: CartServiceService,private authService:AuthServiceService,private route:ActivatedRoute,private router:Router,private cdr:ChangeDetectorRef){
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
   this.width=window.innerWidth
    this.counter = this.CartServiceService.cart_count;
    //this.checkLoginStatus()
    console.log("in app component")
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          // Refresh logic for the navbar
          this.user=localStorage.getItem('user')
          this.user=JSON.parse(this.user)
          this.name=this.user?.name
      }
  });

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
  isNavOpen = false; // Tracks whether the sidenav is open
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.cdr.detectChanges(); // Force Angular to update the DOM
    console.log("Nav state toggled");
  }
// toggleNav() {
//   this.isNavOpen = !this.isNavOpen; // Toggle state
//   console.log("Nav is now " + (this.isNavOpen ? "open" : "closed"));
// }
  navWidth:any="0" ; // Default width

  openNav(){
    this.navWidth="200px"
    console.log("in open menu")
  }
  isNavbarCollapsed = true;
  // closeNav() {
  //   const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
  //   if (!this.isNavbarCollapsed) {
  //     this.isNavbarCollapsed = true;
  
  //     // const bsCollapse = new bootstrap.Collapse(
  //     //   document.getElementById('navbarNavAltMarkup')!, 
  //     //   { toggle: false }
  //     // );
  
  //     // bsCollapse.hide();
  //   }
  // }
  closeNav() {
    this.navWidth = "0"; // Update the width via binding
    const navbar = document.getElementById('navbarNavAltMarkup');
    if (navbar) {
      navbar.classList.remove('show'); // Ensure the navbar visually collapses
    }
   
  }
  login(){
    this.ngOnInit()
    this.router.navigateByUrl("login")
    this.checkLoginStatus()
    
  }
  
  logout(){
  
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
