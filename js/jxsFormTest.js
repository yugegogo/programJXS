


let username=$("#username");
let userpass=$("#userpass");
let reuserpass=$("#reuserpass");
let yanZhengMaShow=$("#yanZhengMaShow");

let yanZhengMa=$("#yanZhengMa");
let testyzm=$(".testyzm")[0];
let agree=$("#agree");
let yhxyspan=$(".yhxyspan")[0];

userpass.onchange=judgeUserpass;

// 判断用户名 正则
let yhmtest=false;
$("#username").onblur=function(){
	if(!check(username.value,"username")){
		 yhmtest=false;
		 username.style.borderColor="red";
		 username.style.marginBottom=0;
		 username.nextSibling.style.display="block";
		 username.nextSibling.innerHTML="请检查手机号码是否输入正确";
		 return;
	}else{
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		var sendstr="username="+this.value;
		xhr.open("get","php/isUserNameExist.php?"+sendstr,true);
		//3、设置回调函数 
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText==1){
					username.style.borderColor="#e8e8e8";
					username.style.marginBottom=0;
					 username.nextSibling.style.display="block";
					$(".testspan")[0].innerHTML = "用户名已存在";
					yhmtest=false;

				}else{
					$(".testspan")[0].innerHTML = "√";
					 username.nextSibling.style.display="block";
					username.style.borderColor="blue";
					username.style.marginBottom=0;
					yhmtest=true;
				}
			}
		}
		xhr.send();
	}
}

//判断密码 政策
let mimatest=false;
function judgeUserpass(){
	if(!check(userpass.value,"userpass")){
		mimatest=false;
		 userpass.style.borderColor="red";
		 userpass.style.marginBottom=0;
		 userpass.nextSibling.style.display="block";
		 userpass.nextSibling.innerHTML="密码为6-16位数字/字母/下划线"
		return;
	}else{
		 userpass.style.borderColor="#e8e8e8";
		 userpass.style.marginBottom="15px";
		 userpass.nextSibling.style.display="none";
		 userpass.nextSibling.innerHTML="";
		 mimatest=true;
	}
}
//确认密码
 reuserpass.onchange=judgeRepeatUserpass;
let cfmima=false;
function judgeRepeatUserpass(){
	if(reuserpass.value!=userpass.value){
		cfmima=false;
		reuserpass.style.borderColor="red";
		reuserpass.style.marginBottom=0;
		 reuserpass.nextSibling.style.display="block";
		reuserpass.nextSibling.innerHTML="两次输入的密码不一致"
		return;
	}else{
		 reuserpass.style.borderColor="#e8e8e8";
		  reuserpass.style.marginBottom="15px";
		 reuserpass.nextSibling.style.display="none";
		 reuserpass.nextSibling.innerHTML="";
		 cfmima=true;
	}
}
//验证码
//获取验证码
let memorize="";
function getyanZhengMa(){
	let index="";
	yanZhengMaShow.innerHTML="";
	memorize="";
	for(let i=0;i<4;i++){
		index=parseInt(Math.random()*10);
		yanZhengMaShow.innerHTML+="<img src=img/"+index+".png>"
		 memorize+=index;
	}
}
getyanZhengMa();
yanZhengMaShow.onclick=getyanZhengMa;

	// 判断验证码
let yzmtest=false;
yanZhengMa.onblur=function (){
	if(yanZhengMa.value!= memorize){
		yzmtest=false;
		yanZhengMa.style.borderColor="red";
		yanZhengMa.style.marginBottom=0;
		testyzm.style.display="block";
		testyzm.innerHTML="验证码错误";
		return;
	}else{
		yzmtest=true;
		yanZhengMa.style.borderColor="#e8e8e8";
		yanZhengMa.style.marginBottom="15px";
		testyzm.style.display="none";
		testyzm.innerHTML="";
		return;
	}
}

//判断用户协议
let pdyhxy=true;
agree.onchange=judgeUserFlie;
function judgeUserFlie(){
	if(agree.checked==true){
		pdyhxy=true;
		yhxyspan.style.color="#e8e8e8";
		yhxyspan.style.display="none";
		yhxyspan.innerHTML="";
		return;
	}else {
		pdyhxy=false;
		yhxyspan.style.color="red";
		yhxyspan.style.display="inline-block";
		yhxyspan.innerHTML="请勾选用户协议";
	}
}

// function checkAll(){
// 	var ischeckAll;
// 	if(yhmtest&&mimatest&&cfmima&&yzmtest&&pdyhxy){
// 		ischeckAll=true;
// 		alert("注册成功，将为您跳转到登录界面");
// 	}else{
// 		ischeckAll=false;
// 		alert("请检查所有内容是否填写正确");
// 		return false;
// 	}

// }

///提交事件
function checkAll(){
	if(yhmtest==true && mimatest==true && cfmima==true && yzmtest==true && pdyhxy==true){
		regSave();
	}else{
		
		alert("请检查所有内容是否填写正确");
		return;
	}

}


function regSave(){
	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	xhr.open("post","php/jxscheckIn.php",true);

	//3、设置回调函数 
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText==1){
				$("#msg").innerHTML = "注册成功！";
			}else{
				$("#msg").innerHTML = "注册失败！请重新输入内容";
			}
		}
	}

	//4、发送请求
	//post请求，与get请求有两个地方不同：
	//1)、设置请求头
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//2)、把发送的数据作为send函数的参数
	
	let sendstr = `username=${$("#username").value}&userpass=${$("#userpass").value}`;
	xhr.send(sendstr);
}

function check(str,type) {
	switch(type){
		case "userpass":var r =  /^\w{6,16}$/; break;
		case  "username":var r =  /^1[3-9]\d{9}$/; break;
	}
	return r.test(str);
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}