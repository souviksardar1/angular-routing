import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { LoginStatusService } from '../Services/login-communicator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authSer : AuthService, 
    private statusService: LoginStatusService){}
  login(){
    this.authSer.login();
    if (this.authSer.loggedIn) {
      alert("login approval status :  "+this.authSer.loggedIn);
      this.statusService.status.emit(this.authSer.loggedIn);
      this.router.navigate(['comp1']);
    } else {
      alert("login approval status : "+this.authSer.loggedIn);
    }
    
  }
}
