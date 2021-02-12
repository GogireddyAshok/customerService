interface Person{
    firstname: string;
    lastname: string;
    getfullname(): string;
}
 
class sun implements Person{
    firstname: string;
    lastname: string;
    getfullname(): string {
        return this.firstname + this.lastname;
    }
}

let aperson: Person = new sun();

let some={
    firstname: 'Ashok',
    lastname: 'Reddy',
    getfullname:() => 'Test'
};

aperson=some;
aperson