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
    this.flag = this.activatedR.snapshot.queryParams['isDisabled'];
    this.value = this.activatedR.snapshot.queryParams['ValueIs'];
  }


}
