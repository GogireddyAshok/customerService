import { Observable, of } from 'rxjs';
import { customerservicemodel} from '../model/customerinterface';

export const customers: Observable<customerservicemodel[]> = of([
      {
       id: 1,
       firstname: 'sherlock',
       lastname: 'Holmes',
       emailaddress: 'sherlock.holmes@gmail.com',
       gender: 'Male',
       address: 'hangstong street - 4',
       city: 'New York',
       state: 'USA'
       },
       {
        id: 2,
        firstname: 'Enola',
        lastname: 'Holmes',
        emailaddress: 'enola.holmes@gmail.com',
        gender: 'Female',
        address: 'Wall tower - 43',
        city: 'London',
        state: 'U K'
       }]);
