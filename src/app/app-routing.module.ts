import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { MenProductComponent } from './men-product/men-product.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'add',component:ProductComponent},
  {path:'cart',component:CheckoutComponent,canActivate:[authGuard]},
  {path:'product/:id',component:ProductPageComponent},
  {path:'women',component:WomenProductComponent},
  {path:'men',component:MenProductComponent},
  {path:'women/product/:id',component:ProductPageComponent},
  {path:'men/product/:id',component:ProductPageComponent},
  {path:'footer',component:FooterComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  //{path:'app',component:AppComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
