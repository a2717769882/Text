function getLength(str){
  return str.replace(/[^\x00-\xff]/g,"xx").length;
}
function findStr(str,n){
	var tmp=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==n){
			tmp++
		}
	}
	return tmp;
}

window.onload=function(){
	var alnput=document.getElementsByTagName("input");
	var oName=alnput[0];
	var pwd=alnput[1];
	var pwd2=alnput[2];
	var aP=document.getElementsByTagName("p");
	var name_msg=aP[0];
	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];
	var count=document.getElementById("count");
	var aEm=document.getElementsByTagName("em");
	var name_length=0;
   
    var re=/[^\w\u4e00-\u9fa5]/g;    
    //光标
    oName.onfocus=function(){
      name_msg.style.display="block";
      name_msg.innerHTML='<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名'
    }
    //键盘
    oName.onkeyup=function(){
       count.style.visibility="visible";
       name_length=getLength(this.value);
       count.innerHTML=name_length+"个字符";
       if(name_length==0){
       	count.style.visibility="hidden";
       }
    }
    //光标消失
    oName.onblur=function(){
      //含有非法字符
      var re=/[^\w\u4e00-\u9fa5]/g;
      if(re.test(this.value)){
      	name_msg.innerHTML="<i class='err'></i>含有非法字符!"
      }
      //不能为空
      else if(this.value==""){
        name_msg.innerHTML="<i class='err'></i>不能为空!"
      }
      //长度超过25个字符
      else if(name_length>25){
      	name_msg.innerHTML="<i class='err'></i>长度超过25个字符!"
      }
      //长度少于6个字符
      else if(name_length<6){
      	name_msg.innerHTML="<i class='err'></i>长度少于6个字符!"
      }
      //OK
      else{
      	name_msg.innerHTML="<i class='err'></i>OK!"
      }
    }

    pwd.onfocus=function(){
      pwd_msg.style.display="block";
      pwd_msg.innerHTML='<i class="ati"></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号。'
    }
    pwd.onkeyup=function(){
     if(this.value.length>5){
     	aEm[1].className="active";
     	pwd2.removeAttribute("disabled");
     	pwd2_msg.style.display="block";
     }
     else{
     	aEm[1].className="";
     	pwd2.setAttribute("disabled","disabled");
     	pwd2_msg.style.display="none";
     }
     if(this.value.length>10){
     	aEm[2].className="active";
     }
     else{
     	aEm[2].className="";
     }
    }
    pwd.onblur=function(){
     var m=findStr(pwd.value,pwd.value[0]);
     var re_n=/[^\d]/g;
     var re_t=/[^a-zA-Z]/g;
     if(this.value==""){
     	pwd_msg.innerHTML='<i class="err"></i>不能为空！'
     }
     else if(m==this.value.length){
     	pwd_msg.innerHTML='<i class="err"></i>不能为相同字符！'
     }
     else if(this.value.length<6||this.value.length>16){
     	pwd_msg.innerHTML='<i class="err"></i>长度应为6-16字符！'
     }
     else if(!re_n.test(this.value)){
     	pwd_msg.innerHTML='<i class="err"></i>不能全为数字！'
     }
     else if(!re_t.test(this.value)){
     	pwd_msg.innerHTML='<i class="err"></i>不能全为字母！'
     }
     else{
     	pwd_msg.innerHTML='<i class="err"></i>OK！'
     }
    }
    pwd2.onblur=function(){
    	if(this.value!=pwd.value){
    		pwd2_msg.innerHTML='<i class="err"></i>两次输入密码不一致！'
    	}
    	else{
    		pwd2_msg.innerHTML='<i class="err"></i>OK！'
    	}
    }
}
