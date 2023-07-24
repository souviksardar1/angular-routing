import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component  implements OnInit{

 userId : string = '';
 userName : string = '';
constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
  //  this.userId =  this.route.snapshot.params['idd'];
  //  this.userName =  this.route.snapshot.params['namee'];
  // ABOVE CODE OR BELOW CODE BOTH WILL WORK
   this.route.params.subscribe(
    (d : Params) =>{
      this.userId = d['idd'];
      this.userName = d['namee'];
    }
   );
  }
}
