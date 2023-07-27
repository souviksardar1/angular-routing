import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { AuthGuard } from './Services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'comp1', canActivate: [AuthGuard], component: Component1Component},
{path: 'comp2', canActivate: [AuthGuard], component: Component2Component},
{path: 'comp3', canActivateChild: [AuthGuard], component: Component3Component, children: [
                {path: ':id1', component: Component2Component}
]},
{path: 'comp4/:idd/:namee', component: Component4Component},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
