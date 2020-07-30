
var pho = document.querySelector(".pho");
var sp1 = document.querySelector(".sp1");
pho.addEventListener("focus", phoHandler);
pho.addEventListener("blur", phoBlurHandler);
function phoHandler(e) {
    sp1.style.display = 'block';
    sp1.style.color = 'gray';
    sp1.innerHTML = '可通过该手机号找回密码';
}
var photo=null;
function phoBlurHandler() {
    photo = pho.value;
    sp1.style.color = 'gray';
    sp1.style.innerHTML = '可通过该手机号找回密码';
    if (!photo) {
        sp1.style.display = 'none';
        sp1.style.innerHTML = '可通过该手机号找回密码';
    } else if (!(photo.length === 11)) {
        sp1.innerHTML = '!请填写正确的中国大陆地区手机号';
        sp1.style.color = 'red';
    } else if (!poH(photo)) {
        sp1.innerHTML = '!请填写正确的中国大陆地区手机号';
        sp1.style.color = 'red';
    } else {
        sp1.innerHTML = '可通过该手机号找回密码';
        sp1.style.display = 'none';
    }
}
function poH(photo) {
    return /^1[3|4|5|8][0-9]\d{4,8}$/.test(photo);
}
// 密码
var pas = document.querySelector(".pas");
var sp2 = document.querySelector(".sp2");
pas.onfocus = function () {
    sp2.style.display = 'block';
    sp2.style.color = 'gray';
    sp2.innerHTML = '6～16个字符，区分大小写';
}
var oPas=null;
pas.onblur = function () {
    oPas = pas.value;
    if (!oPas) {
        sp2.style.innerHTML = '6～16个字符，区分大小写';
        sp2.style.display = 'none';
    } else if (oPas.length > 16 || oPas.length < 6) {
        sp2.innerHTML = '! 密码长度应为6~16个字符';
        sp2.style.color = 'red';

    } else
        if (ze(oPas)) {
            sp2.style.innerHTML = '6～16个字符，区分大小写';
            sp2.style.display = 'none';
        } else {
            sp2.innerHTML = '密码过于简单，请尝试“字母+数字”的组合';
            sp2.style.color = 'red';
        }

}

function ze(apu) {
    return /[\d]/.test(apu) && /[a-zA-Z]/.test(apu);
}
// 邮箱
var emi = document.querySelector(".emi");
var sp3 = document.querySelector(".sp3");
emi.addEventListener("blur", blurHandler);
var pro=null;
function blurHandler() {
     pro = emi.value;
    if (emo(pro)) {
        sp3.style.display = 'none'
    } else {
        sp3.style.display = "block";
        sp3.style.color = "red"
    }
}
function emo(pro) {
    return /^\w+@\w+\.com$/.test(pro);
}



// 条款
var lab = document.querySelector(".lab");
var sp4 = document.querySelector(".sp4");
 var chebox = lab.value;


// 提交
var butt=document.querySelector("button");
butt.addEventListener("click",clickHandler);



 function clickHandler(e){
    if(!photo){
        sp1.style.display='block';
        sp1.style.color = 'red';
        sp1.style.innerHTML = '!手机号不能为空';
       
    }else if(!oPas){
        sp2.style.display='block';
        sp2.style.color = 'red';
        sp2.style.innerHTML = '!密码不能为空';
       
    }else if(!pro){
        sp3.style.display='block';
        sp3.innerHTML='！邮箱地址不能为空';
        sp3.style.color='red';
        
    }else if(!chebox === 'on'){
        sp4.style.display='block';
        sp4.style.color='red';
        
    }else{
        butt.type="submit"
    }
} 



