function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}


var chart=$(".car_box")[0];//购物车列表
var more=$("article")[0];//相关配件
var nullCar=$(".nullCar")[0];//空车

//显示空车
function show1(){
	chart.style.display="none";
	more.style.display="none";
	nullCar.style.display="block";
}
//显示购物车
function show2(){
	chart.style.display="block";
	more.style.display="block";
	nullCar.style.display="none";
}

var increase=$(".increase");
var decrease=$(".decrease");
var count=$(".count");
var minSump=$(".minSump");

for(let i=0;i<increase.length;i++){
	increase[i].onclick=addOne;
	decrease[i].onclick=cutOne;
}
for(let i=0;i<count.length;i++){
	count[i].onchange=judgeValue;
}


function cutOne(){
	if(this.nextElementSibling.value==1){
		alert('购买数量不能小于1件');
		this.nextElementSibling.value="1";
		addAll();
		numValue();
		return;
	}
	this.nextElementSibling.value=""+parseInt(this.nextElementSibling.value)-1;
	this.parentNode.parentNode.nextElementSibling.innerHTML=(this.parentNode.parentNode.previousElementSibling.innerHTML*this.nextElementSibling.value).toFixed(2);
	addAll();
	numValue();
}
function addOne(){
	if(this.previousElementSibling.value=="5"){
		alert('非常抱歉，您选择的商品库存数量只有5件,您只能选择5件');
		this.previousElementSibling.value="5";
		addAll();
		numValue();
		return;
	}
	this.previousElementSibling.value=parseInt(this.previousElementSibling.value)+1+"";
	this.parentNode.parentNode.nextElementSibling.innerHTML=(this.parentNode.parentNode.previousElementSibling.innerHTML*this.previousElementSibling.value).toFixed(2);
	addAll();
	numValue();
}


function judgeValue(){
	if(this.value<=1){
		alert('购买数量不能小于1件');
		this.value="1";
		this.parentNode.parentNode.nextElementSibling.innerHTML=(this.parentNode.parentNode.previousElementSibling.innerHTML*this.value).toFixed(2);
		addAll();
		numValue();
		return;
	}else if(this.value>=5){
		this.value="5";
		alert('非常抱歉，您选择的商品库存数量只有5件,您只能选择5件');
		this.parentNode.parentNode.nextElementSibling.innerHTML=(this.parentNode.parentNode.previousElementSibling.innerHTML*this.value).toFixed(2);
		addAll();
		numValue();
		return;
	}
	this.parentNode.parentNode.nextElementSibling.innerHTML=(this.parentNode.parentNode.previousElementSibling.innerHTML*this.value).toFixed(2);
	addAll();
	numValue();
}
 
function addAll(){
	var totalPrice=0;
	for(let i=0;i<minSump.length;i++){
		totalPrice=totalPrice+Number(minSump[i].innerHTML);
	}
	$("#totalPrice").innerHTML=totalPrice.toFixed(2);
}
 
var shanchu=$(".deleteLine");
for(let i=0;i<shanchu.length;i++){
		shanchu[i].onclick=deleteThisRow;
	}
function deleteThisRow(){
	if(confirm("您确实要把该商品移出购物车吗？")){
		this.parentNode.parentNode.style.display="none";
		this.parentNode.previousElementSibling.innerHTML="0";
		this.parentNode.previousElementSibling.previousElementSibling.children[0].children[1].value="0";
		addAll();
		numValue();
	}
	
}
//清除购物车
$("#clearAll").onclick=function(){
	if(confirm("您确实要把该商品移出购物车吗？")){
		$('#shoppingNum').innerHTML="0";
		this.setAttribute("href","jiXieShi.html");
	}
}

//显示右上角购物车中的物品数目 
function numValue(){
	var num=0;
	for(let i=0;i<count.length;i++){
		num=num+parseInt(count.value);
	}
	$('#shoppingNum').innerHTML=num;
	$('#shoppingNum').innerHTML=="0"?show1():show2();//显示空车或购物车
}

