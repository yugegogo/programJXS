function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

var num=$('#shoppingNum');
var chart=$(".car_box")[0];
var more=$("article")[0];
var nullCar=$(".nullCar")[0];
num.innerHTML=="0"?show1():show2();
function show1(){
	chart.style.display="none";
	more.style.display="none";
	nullCar.style.display="block";
}
function show2(){
	chart.style.display="block";
	more.style.display="block";
	nullCar.style.display="none";
}
var increase=$("#increase");
var count=$("#count").value;

var countValue=parseInt(count);
var decrease=$("#decrease");
increase.onclick=function addOne(){
	countValue=countValue+1;
	count=""+countValue;
}
decrease.onclick=function cutOne(){
	countValue=countValue-1;
	count=""+countValue;
}
console.log(count);