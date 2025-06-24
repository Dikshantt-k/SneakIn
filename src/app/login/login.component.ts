import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {
  user:any={}

  t:any

  constructor(private authService:AuthServiceService,private router:Router){}

  login(){

    this.authService.login(this.user.userName,this.user.password);
    this.t=localStorage.getItem('user')

  }

}
