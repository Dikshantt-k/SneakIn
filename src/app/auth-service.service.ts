import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit {

  user: User | undefined
  users: User[] = [];


  constructor(private UserService: UserServiceService, private router: Router) { }
  ngOnInit(): void {
    this.UserService.getUser().subscribe(x => this.users = x)
  }

  async login(userName: string, password: string) {
  
    // Convert the Observable to a Promise and wait for the result
    this.users = await this.UserService.getUser().toPromise();
    this.user = this.users.find(x => x.userName === userName && x.password === password);

    if (this.user) {
      let u = JSON.stringify(this.user);
      localStorage.setItem('user', u);
      this.router.navigateByUrl('')
    //   this.router.navigateByUrl('/navbar', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['']);
    // }); 
    } else {
      alert("wrong credentials");
    }
  
}


 logout(){
  localStorage.removeItem('user')
 }

}
