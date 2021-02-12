export class person{
   constructor(private firstname: string, private lastname: string)
   {

   }
    greet()
    {
        console.log("hey there");
    }
    getFirstname(){
        return this.firstname;
    }
    setFirstname(firstname: string){
        this.firstname=firstname;
    }
    getLastname(){
        return this.lastname;
    }
    setLastname(lastname: string){
        this.lastname=lastname;
    }
    getfullname(){
        return this.firstname+" "+this.lastname;
    }
}
class prog extends person
{
    greet()
    {
        console.log("prog class")
    }
    greetn()
    {
        super.greet();
    }
}

var p: person =new prog("Ashok","Gogireddy");
console.log(p.getfullname());