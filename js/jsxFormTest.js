
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

let username=$("#username");
let userpass=$("#userpass");
let reuserpass=$("#reuserpass");
let yanZhengMaShow=$("#yanZhengMaShow");
let yanZhengMa=$("#yanZhengMa");
let testyzm=$(".testyzm")[0];
let agree=$("#agree");
let yhxyspan=$(".yhxyspan")[0];

username.onblur=jugeUsername();
userpass.onblur=judgeUserpass();
function check(str,type) {
	switch(type){
		case "userpass":var r =  /^\w{6,16}$/; break;
		case  "username":var r =  /^1[3-9]\d{9}$/; break;
	}
	return r.test(str);
}
// 判断用户名
let yhmtest=false;
function jugeUsername(){
	if(!check(username.value,"username")){
		 yhmtest=false;
		 this.style.borderColor="red";
		 this.nextSibling.style.display="block";
		 this.nextSibling.innerHTML="请检查手机号码是否输入正确"
		 return;
	}else{
		yhmtest=true;
		 this.style.borderColor="#e8e8e8";
		 this.nextSibling.style.display="none";
		 this.nextSibling.innerHTML="";
		  return;
	}
}

//判断密码
let mimatest=false;
function judgeUserpass(){
	if(!check(userpass.value,"userpass")){
		mimatest=false;
		 this.style.borderColor=red;
		 this.nextSibling.style.display="block";
		this.nextSibling.innerHTML="密码为6-16位数字/字母/下划线"
		return;
	}else{
		 this.style.borderColor="#e8e8e8";
		 this.nextSibling.style.display="none";
		 this.nextSibling.innerHTML="";
		 mimatest=true;
	}
}
//判断重复密码
 reuserpass.onblur=judgeRepeatUserpass();
let cfmima=false;
function judgeRepeatUserpass(){
	if(reuserpass.value!=userpass.value){
		cfmima=false;
		 this.style.borderColor=red;
		 this.nextSibling.style.display="block";
		this.nextSibling.innerHTML="两次输入密码不一致"
		return;
	}else{
		 this.style.borderColor="#e8e8e8";
		 this.nextSibling.style.display="none";
		 this.nextSibling.innerHTML="";
		 cfmima=true;

	}
}
//验证码
// 获取验证码
// let memorize="";
// function getyanZhengMa(){
// 	let index="";
// 	let yanZhengMaShow.innerHTML="";
// 	memorize="";
// 	for(let i=0;i<4;i++){
// 		index=parseInt(Math.random()*10);
// 		yanZhengMaShow.innerHTML+="<img src=img/"+index+".jpg>"
// 		 memorize+=index;
// 	}
// }
// yanZhengMaShow.onclick=function(){
// 	getyzm();
// }
	// 判断验证码
let yzmtest=false;
yanZhengMa.onblur=function (){
	if(yanZhengMa.value!= memorize){
		yzmtest=false;
		yanZhengMa.style.borderColor="red";
		testyzm.style.display="block";
		testyzm.innerHTML="验证码错误";
		return;
	}else{
		yzmtest=true;
		yanZhengMa.style.borderColor="#e8e8e8";
		testyzm.style.display="none";
		testyzm.innerHTML="";
		return;
	}
}

//判断用户协议
let pdyhxy=false;
agree.onblur=judgeUserFlie();
function judgeUserFlie(){
	if(agree.checked==checked){
		pdyhxy=true;
		agree.style.borderColor="#e8e8e8";
		yhxyspan.style.display="none";
		yhxyspan.innerHTML="";
		return;

	}else{
		pdyhxy=false;
		agree.style.borderColor="red";
		yhxyspan.style.display="block";
		yhxyspan.innerHTML="未勾选用户协议";
	}
}







function checkAll(){
	if(yhmtest&&mimatest&&cfmima&&yzmtest&&pdyhxy){
		alert("注册成功");
		return;
	}else{
		alert("请检查所有内容是否填写正确");
	}

}