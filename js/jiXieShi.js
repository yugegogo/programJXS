function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
// 轮播图
 // function bannerPlayer(tagname){
 // 	let arr=["bg01.jpg","bg02.jpg","bg03.gif","bg04.jpg","bg05.jpg","bg06.jpg"];
 // 	for(let i=0;i<arr.length;i++){
	//  	setInterval(function(){
	// 	tagname.backgroundImage=`url("img/arr[i]")`;
	//  	},1000)
 // 	}
 // }
 // bannerPlayer($(".bannerCon"))


// 一、系列产品下拉框

// 1.获取workList下所有的a标签  获取所有的ul
let workLists=$(".workList")[0].children;
// console.log(workLists);
let uls=$(".productsBox")[0].children;
// console.log( uls);
// 2.循环给每个a绑定事件处理函数
for(let i=1;i<workLists.length-1;i++){
		// a.鼠标移入，字体变蓝，对应的商品列表出现
	workLists[i].onmouseover=function(){
		this.style.color="skyblue";
		uls[i].style.display="block";
	}
	$(".workList")[0].onmouseover=function(){
		this.style.display="block";
	}
	uls[i].onmouseover=function(){
		this.style.display="block";
	}


		// b.鼠标移开 ，隐藏，字体颜色恢复
	workLists[i].onmouseout=function(){
		this.style.color="";
		uls[i].style.display="none";
	}
	uls[i].onmouseout=function(){
		this.style.display="none";
	}
}

// 二、产品介绍

let bannerLists=$(".bannerList")[0].children;
// console.log(bannerLists);
let selects=$(".selectBox")[0].children;
// console.log( selects);

for(let i=0;i<4;i++){
	 bannerLists[i].onmouseover=function(){
	 	selects[i].style.display="block";
	 	$(".selectBox")[0].onmouseover=function(){
	 		selects[i].style.display="block";
	 	}
	 }
	 bannerLists[i].onmouseout=function(){
	 	selects[i].style.display="none";
	 	$(".selectBox")[0].onmouseout=function(){
	 		selects[i].style.display="none";
	 	}
	 }
}

// 三、签到效果
$(".qDYL")[0].onmouseover=function(){
	$(".trangle")[0].style.display="block";
	$(".qianDao")[0].style.display="block";
	$(".qianDao")[0].onmouseover=function(){
		$(".trangle")[0].style.display="block";
		$(".qianDao")[0].style.display="block";
	}
}

$(".qDYL")[0].onmouseout=function(){
	$(".trangle")[0].style.display="none";
	$(".qianDao")[0].style.display="none";
	$(".qianDao")[0].onmouseout=function(){
		$(".trangle")[0].style.display="none";
		$(".qianDao")[0].style.display="none";
	}

};

// 四、hover后停留到当前

let titleRights=$(".titlesRight")[0].children;
let section1BodyUls=$(".bigUl")[0].children;
let indexNow;
for(let i=0;i< titleRights.length-1;i++){
		titleRights[i].onmouseover=function(){
			for(let j=0;j< titleRights.length-1;j++){
				titleRights[j].style="";
			}
			indexNow=this.getAttribute("index");
			titleRights[indexNow].style.color="#1FA7EA";
			titleRights[indexNow].style.borderBottom=" 2px solid #1FA7EA";
			for(let j=0;j<section1BodyUls.length;j++){
				section1BodyUls[j].style.display="none";
			}
			section1BodyUls[indexNow].style.display="block";
		}
	
}


	

