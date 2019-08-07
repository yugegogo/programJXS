function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

//点击beforeHeader消失
$(".icon-shanchu")[0].onclick=function(){
	$(".beforeHead")[0].style.display="none";
}
$(".deleteImg")[0].onclick=function(){
	$(".beforeAll")[0].style.display="none";
}
// 一、系列产品下拉框

// 1.获取workList下所有的a标签  获取所有的ul
let workLists=$(".workList")[0].children;
// console.log(workLists);
let uls=$(".productsBox")[0].children;

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


	

//新闻资讯
var news=$(".news")[0].children;

var arrNews=["【149元同等价位U盘对比测评，哪个会更...","【福利】美女也爱它，机械师笔记本玩转夏机械师笔记本","炫光微边游戏本，F117-V引领机械师...","嚎哭深渊紧急集合，机械师LOL王者so...","没钱买不起游戏本？手把手教你如何省钱购...","2018英特尔大师挑战赛，机械师新8代战机助你刷新战绩_机械师快报_机械师MACHENIKE官网-正品商城","尖叫时刻！机械师携霸券助燃618年中大促","你好台州！机械师电竞体验店台州店正式开业","冰点降临，机械师暑促狂欢为学生党广派福利","侬好！机械师上海首家线下体验店强势登场","帧英雄帧能赢，购机械师战机赢DOTA2勇士令状"]
console.log(arrNews.length);
var currentOrd=0;
var timer1=null;
function newsAutoPlay(){
		if(timer1!=null){
			return;
		}
		 timer1=setInterval(function(){
		let lastestOrd=currentOrd;
		for(let i=0;i<5;i++){
			news[i].children[0].innerHTML=arrNews[currentOrd];
			currentOrd=currentOrd+1;
		}
		currentOrd=lastestOrd+1;
		if(currentOrd==arrNews.length-4){
			currentOrd=0;
		}
	},3000)

}
newsAutoPlay();

for(let i=0;i<news.length;i++){
	news[i].onmouseover=function(){
		clearInterval(timer1);
		timer1=null;
	}
	news[i].onmouseout=newsAutoPlay;
}