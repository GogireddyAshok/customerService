import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { customers } from '../config/customer.config';

@Component({
  selector: 'app-customercard',
  templateUrl: './customercard.component.html',
  styleUrls: ['./customercard.component.css']
})
export class CustomercardComponent implements OnInit {
  public customer = customers;
  arr: any[] | undefined;
@Output() updateData = new EventEmitter();

formdata: any = {};
  constructor(public customerservice: CustomerService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customer.subscribe(cust => this.arr = cust);
    const dem = this.activatedroute.params.subscribe( params =>
      {
        this.formdata = params.formdata;
        console.log('daf');
        if (this.formdata){
        this.customerservice.updateData(this.formdata);
        }
        console.log('card edit');
      });
    dem.unsubscribe();
  }

}
