import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginuser(): void
  {
   if(this.username == "Admin" && this.password == "9499")
   {
     this.router.navigate(['./customer'])
   }
  }
}
