import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  flag : any;
  value : string = '';
constructor(private rtr : Router, private activatedR : ActivatedRoute){}

  ngOnInit(): void {

    this.activatedR.queryParams.subscribe(
      (p : Params) => {
        this.flag = p['isDisabled'];
        this.value = p['ValueIs'];
      }

    );
    // this.flag = this.activatedR.snapshot.queryParams['isDisabled'];
    // this.value = this.activatedR.snapshot.queryParams['ValueIs'];
  }


}
