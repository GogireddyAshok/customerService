var x = 0;
var array = Array();
var limit;
function CheckNumericValue(e) {
       limit = document.getElementById('num1').value;
       var key = e.which ? e.which : e.keyCode;                
       if ((key >= 48 && key <= 57) || key == 13 || key == 8 || key == 9 || key == 27) {
       dos();
           return true;
       }
       else {
           alert("Please Enter Number Only");
           return false;
       }
    }
function dos()
{
console.log(array.length,limit,parseInt(limit) <= array.length);
if(parseInt(limit) <= (array.length)){
document.getElementById("button1").disabled = true;
}
}

function add_element_to_array()
{
 array[x] = document.getElementById("num").value;
    x++;
document.getElementById("num").value = "";
dos();
}
function calculate_array()
{  

var maxValue = Math.max(...array);
var minValue = Math.min(...array);
var sum=0;
for ( var i = 0; i < array.length; i ++){
    var sum =sum + parseInt(array[i]);
}
var avg;
avg= sum/(array.length);

document.getElementById('d1').innerHTML='<span>The maximum number: '+maxValue+'</span><br><span>The minimum number: '+minValue+'</span><br><span>The average of array : '+avg+'</span>';
}
function maximum_array()
{
var maxValue = Math.max(...array);
document.getElementById('d1').innerHTML='<span>the array elements:'+array+'</span><br><span>The maximum number: '+maxValue+'</span>';
}
function minimum_array()
{
var minValue = Math.min(...array);
document.getElementById('d1').innerHTML='<span>the array elements:'+array+'</span><br><span>The minimum number: '+minValue+'</span>';
}
function avg_array()
{
var sum=0;
for ( var i = 0; i < array.length; i ++){
    var sum =sum + parseInt(array[i]);;
}
var avg;
avg= sum/(array.length);
document.getElementById('d1').innerHTML='<span>the array elements:'+array+'</span><br><span>The average number: '+avg+'</span>';
}
