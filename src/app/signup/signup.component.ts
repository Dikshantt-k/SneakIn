import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
 user:User=new User("","","","",[],{})
 
  

  ngOnInit(): void {
      
  }
  constructor(private userService:UserServiceService){}

  saveUser(){
    this.userService.postUser(this.user).subscribe(x=>{this.ngOnInit()
      this.user={
        
          name:"",
          email:"",
          userName:"",
          password:"",
          cartItem:[],
          item:{}
      }
    })
  }
}
