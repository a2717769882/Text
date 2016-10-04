 //运动框架
 window.onload=function(){
       	var Li=document.getElementById('li1');
       	var LI=document.getElementById('li2');
       	var at1=document.getElementsByClassName("at1")[0];
       	var at2=document.getElementsByClassName("at2")[0];
       	Li.onmouseover=function(){
       		move(at1,{width:30,height:40,opacity:100});
       	}
       	
       	Li.onmouseout=function(){
       		move(at1,{width:25,height:37,opacity:30});
       	}
       	LI.onmouseover=function(){
       		move(at2,{width:30,height:40,opacity:100});
       	}
       	
       	LI.onmouseout=function(){
       		move(at2,{width:25,height:37,opacity:30});
       	}
       	
       }
 function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var falg=true;
		for(var attr in json){
		//取当前值
		var curr=0;
		if(attr=='opacity'){
			curr=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			curr=parseInt(getStyle(obj,attr));
		}
		//取速度
		var speed=(json[attr]-curr)/8;
		//判断-+
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//检测停止
		if(curr!=json[attr]){
			flag=false;
		}
		if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity=(curr+speed)/100;
			}else{
				obj.style[attr]=curr+speed+'px';
			}
		
	}
	if(flag){
		clearInterval(obj.timer);
		if(fn){
			fn();
		}
	}
	},30)
}

function getStyle(obj,attr){
    	if(obj.currentStyle){
    		return obj.currentStyle[attr];
    	}else{
    		return getComputedStyle(obj,false)[attr];
    	}
    }