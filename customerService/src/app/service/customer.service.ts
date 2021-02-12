import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { customerservicemodel } from '../model/customerinterface';
import { customers } from '../config/customer.config';
import { viewType } from '../model/enum';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer =  customers;
  public dataFilter: Observable<customerservicemodel[]> = this.customer;
  public formData: customerservicemodel = { };

    public viewtype: Observable<viewType> = of(viewType.grid);
    get customers(): Observable<customerservicemodel[]>{return this.customer; } // rename to customers

    set customers(customer: Observable<customerservicemodel[]>)
    {
      customer = customer;
    }
    get viewType(): Observable<viewType>{return this.viewtype; }

    set viewType(viewtype: Observable<viewType>)
    {
      this.viewtype = viewtype;
    }
  // create setter getter for customerData    </app-customer-detalis>
    get customerData(): customerservicemodel{return this.formData; }

    set customerData(formData: customerservicemodel)
    {
     this.formData = formData;
    }

    additem(value: customerservicemodel): void{
      console.log('acutsdf', value);
      let customersList: customerservicemodel[];
      const dem = this.customer.subscribe((cust: any[]) => {
        customersList = cust;
        const index = cust.findIndex(a => a.id === this.formData.id);
        if (this.formData.id){
          customersList[index] = value;
        }else{
          const len = customersList.length;
          value.id = len + 1;
          customersList.push(value);
        }
        this.viewtype = of(viewType.grid);
        console.log(cust);
        this.customers = of(customersList);
        dem.unsubscribe();
       });

  }

  updateData(customersData: customerservicemodel): void
  {
    console.log('upadte');
    console.log(customersData);
    this.formData = customersData;
    console.log(this.formData );
    this.viewtype = of(viewType.new);
  }
      cancel(): void{
        this.viewType = of(viewType.grid);
        console.log('cancel');
      }

      delete(id: number): void
      {
        console.log('dele');
        // console.log(id)
        const dem = this.customer.subscribe((cust: any[]) =>  {
        const index = cust.findIndex(a => a.id === this.formData.id);
        cust.splice(index, 1);
        this.viewType = of(viewType.grid);
        });
        dem.unsubscribe();
      }

      filterData(id: number): void
     {
     // tslint:disable-next-line: no-non-null-assertion
     const dem = this.customer.subscribe((cust: any[]) =>
        {
          // tslint:disable-next-line: triple-equals
          const findData: customerservicemodel[] = cust.filter(i => i.id == id);
          this.dataFilter = of(findData);
        })!;
     console.log(this.dataFilter);
     dem.unsubscribe();
      }
}
