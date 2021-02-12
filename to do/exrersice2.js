var x = 0;
var array = Array();
function CheckNumericValue(e) {
       var key = e.which ? e.which : e.keyCode;                 
       if ((key >= 48 && key <= 57) || key == 13 || key == 8 || key == 9 || key == 27) {
           return true;
       }
       else {
           alert("Please Enter Number Only");
           return false;
       }
    }
function add_element_to_array()
{
 array[x] = document.getElementById("num").value;
if (array[x] != 8 && array[x] != 0 && (array[x] < 48 || array[x] > 57)){
    x++;
}
else{
    alert("Enter only Number to Execute");
}
document.getElementById("num").value = "";
}
function calculate_array()
{  

var maxValue = Math.max(...array);
document.write("The maximum value of an array:  ",maxValue);
document.write("<br>");
var minValue = Math.min(...array);
document.write("the minimun value of an array is:  ",minValue); 
var sum=0;
for ( var i = 0; i < array.length; i ++){
    var sum =sum + parseInt(array[i]);;
}
var avg;
avg= sum/(array.length);
document.write("<br>");
document.write("The average of an array is:  ",avg);
}

