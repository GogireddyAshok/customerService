import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { customers } from '../config/customer.config';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  @Input() cust!: string;

  // tslint:disable-next-line: new-parens
  @Output() arr = new EventEmitter;
  @Output() cancel = new EventEmitter();
  @Output() deleteElement = new EventEmitter();

  public customer = customers;
  customerform: any;
  formData: any = {};
  constructor(private activatedroute: ActivatedRoute, private route: Router, private customerservice: CustomerService) { }

  ngOnInit(): void {
   const dem = this.activatedroute.params.subscribe( params =>
      {
        const id = params.id;
        console.log(id);
        if (id){
          this.update(id);
        }
        else
        {
          this.formControlData();
        }
      });
   dem.unsubscribe();
  }
  update(id: number): void{
   const dem = this.customer.subscribe(customer =>
      // tslint:disable-next-line: triple-equals
      this.formData = customer.find(i => i.id == id));
   this.formControlData();
   dem.unsubscribe();
  }
  formControlData(): void{

    this.customerform = new FormGroup({
      id: new FormControl(this.formData.id),
      firstname: new FormControl(this.formData.firstname, [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(this.formData.lastname, [Validators.required, Validators.minLength(3)]),
      emailaddress: new FormControl(this.formData.emailaddress, [Validators.required, Validators.email, Validators.minLength(3)]),
      gender: new FormControl(this.formData.gender, [Validators.required]),
      address: new FormControl(this.formData.address, [Validators.required, Validators.minLength(3)]),
      city: new FormControl(this.formData.city, [Validators.required, Validators.minLength(3)]),
      state: new FormControl(this.formData.state, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(): void
  {
    this.arr.emit(this.customerform.value);
  }

   cancelAdd(): void{
   this.cancel.emit();
   }

   delete(): void
   {
     this.deleteElement.emit(this.deleteElement);
   }
}
