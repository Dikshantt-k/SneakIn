import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { CheckoutComponent } from './checkout/checkout.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { MenProductComponent } from './men-product/men-product.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaymentsComponent,
    SignupComponent,
    LoginComponent,
 
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MainpageComponent,
    CheckoutComponent,
    ProductPageComponent,
    WomenProductComponent,
    MenProductComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
