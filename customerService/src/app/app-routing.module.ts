import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomercardComponent } from './customercard/customercard.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customer/card', component: CustomercardComponent},
  {path: 'customer/new', component: CustomerformComponent},
  {path: 'customer/list', component: CustomerlistComponent},
  {path: 'customer/card/edit/:id', component: CustomerformComponent},
  {path: 'customer/list/:id', component: CustomerlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [CustomerformComponent, CustomerComponent, LoginComponent, CustomercardComponent, HomeComponent, CustomerlistComponent]