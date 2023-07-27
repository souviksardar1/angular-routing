import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { LoginStatusService } from './Services/login-communicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'routing';
  idddd = '90';
  loginSuccessful = false;
  constructor(private r : Router
    ,private activeR : ActivatedRoute
    // , private authSer : AuthService
    , private statusServ : LoginStatusService
    , private authSer : AuthService
    ){}
  ngOnInit(): void {
    this.statusServ.status.subscribe(
      (d : boolean) =>{
        this.loginSuccessful = d;
      });
  }

  NegivateToComp3(){
    this.r.navigate(['comp3']);
  }

  NegivateToComp4(){
    //this.r.navigate(['comp4/8/default']);
    //ABOVE & ABOVE BOTH WILL WORK
    // this.r.navigate(['comp4/5/default'], {relativeTo: this.activeR});
    this.r.navigate(['comp4', this.idddd, 'default'], {relativeTo: this.activeR});
  }

  QueryParamsForComp1(){
    this.r.navigate(['comp1'] , {queryParams: {isDisabled: true, ValueIs : 'Suprava SInha'}, 
     fragment: 'Hashh'
  });
  }

  logoutClicked(){
    this.authSer.logout();
  }
}
