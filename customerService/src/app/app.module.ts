import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomercardComponent } from './customercard/customercard.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerformComponent,
    CustomercardComponent,
    CustomerlistComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
