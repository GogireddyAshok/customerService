import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  @Output() filterData = new EventEmitter;
  filter = new FormControl();

  constructor(private activatedroute: ActivatedRoute, public customerService: CustomerService) { }

  ngOnInit(): void {
   const dem = this.activatedroute.params.subscribe( params =>
      {
        const id = params.id;
        console.log(id);
        if (id){
          this.customerService.filterData(id);
        }
      });
   dem.unsubscribe();
  }
  filters(): void
  {
    const filterData = this.filter.value;
    console.log(filterData);
    console.log('fil');
    this.customerService.filterData(filterData);
  }
}
