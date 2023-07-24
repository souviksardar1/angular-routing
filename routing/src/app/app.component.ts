import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  idddd = '90';

  constructor(private r : Router
    ,private activeR : ActivatedRoute
    ){}

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
}
