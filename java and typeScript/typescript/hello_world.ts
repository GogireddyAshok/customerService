var a:number;
var b:boolean;
var c:string;
var d:undefined;

a=10;
b=true;
c='Ashok';

var myarr=[a,b,c];
myarr.push(2);
myarr.pop();
myarr.pop();
console.log(myarr);

function add(a,b){
    return a+b;
}
var sum= add(1,2);
console.log(sum);