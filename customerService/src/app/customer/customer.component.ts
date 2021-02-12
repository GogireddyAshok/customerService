import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CustomerService } from '../service/customer.service';
import { customers } from '../config/customer.config';
import { viewType } from '../model/enum'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public viewtype= viewType;
  public customer= customers;

  constructor(public customerservice: CustomerService, private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const dem = this.activatedroute.params.subscribe( params =>
      {
        const id= params['id'];
        this.customerservice.filterData(id);
      })
      dem.unsubscribe();
  }
  grid()
  { 
    this.customerservice.viewType= of(viewType.grid);
  }

  new()
  { 
     this.customerservice.viewType= of(viewType.new);
     this.customerservice.customerData = { };
  }

  list(){
    this.customerservice.dataFilter = this.customer;
    this.customerservice.viewType= of(viewType.list);
  }
}
