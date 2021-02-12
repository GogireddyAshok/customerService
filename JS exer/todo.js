var data = new Array(); 
function add_element(){
data.push(document.getElementById('t1').value);
document.getElementById('t1').value='';
populateData();
}

function clear_items(){
console.log("clear items");
var c1=data.splice(0,(data.length));
populateData();
}
function rewrite(ind_no)
{
  console.log("aksd");
  var newone;
  var val = document.getElementById('id_'+ind_no).innerHTML='<input type="text" id="updated_data_'+ind_no+'" value="'+data[ind_no]+'" onBlur=updateData('+ind_no+')><div style="float: right">  <i class="far fa-check-circle" style="color: green;"></i> <span onClick="rewrite('+ind_no+')"><i class="far fa-edit" style="color: blue;"></span></i><span onClick="remove('+ind_no+')"><i class="far fa-times-circle" style="color: red;"></i></span> </div></li>'
}

function updateData(ind_no){
  data[ind_no] = document.getElementById('updated_data_'+ind_no).value;
  populateData();
}

function remove(index_no)
{
console.log("remove");
var t1=data.splice(index_no,1);
populateData();
console.log(data);
}
function populateData(){
var i,text="";
for(i=0;i<data.length;i++){
text =text+"<li id='id_"+i+"'>"+data[i]+'<div style="float: right">  <i class="far fa-check-circle" style="color: green;"></i> <span onClick="rewrite('+i+')"><i class="far fa-edit" style="color: blue;"></span></i><span onClick="remove('+i+')"><i class="far fa-times-circle" style="color: red;"></i></span> </div></li>'
}
document.getElementById("myUL").innerHTML = text;
}
