import {person} from './class';
function echo<T>(arg: T): T{
    return arg;
}

var mystr: number=echo(1);


 class admin extends person{

 }

 class manager extends person{

 }

 let Admin=new admin('a','a');
 let Manager=new manager('a','a');

 function personsecho<T extends person>(person: T): T {
    return person;
 }