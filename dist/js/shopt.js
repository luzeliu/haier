define([
    'jquery',
    'jquery-cookie'
], function ($) {
    return init;

});

var obj, imgs, pw, pic, inpt, aggre, pos, sub, addi, del;
var check, check1, cks;
var clear;
function init() {
    imgs = document.querySelector(".shop .tables .nai img")
    pw = document.querySelector(".shop .tables .nai .pw")
    pic = document.querySelector(".shop .tables .pic span")
    inpt = document.querySelector(".shop .tables .number .inpt input")
    aggre = document.querySelector(".shop .tables .aggregate span")
    sub = document.querySelector(".sub");
    addi = document.querySelector(".addi");
    sub.addEventListener("click", subHandler)
    addi.addEventListener("click", addiHandler)


    obj = getCookie();
    objss(obj);



    setInterval(function () {
        pos = inpt.value
        if (pos >= 20) pos = 20;
        if (pos <= 0) pos = 1;
        inpt.value = pos;
        aggre.innerText = obj.price * pos;
        document.cookie="num="+pos;
    }, 500)

    del = document.querySelector(".del a");
    del.addEventListener("click", delHandler);


    cks = document.querySelectorAll("[type=checkbox]");
    cks = Array.from(cks);
    for (var i = 0; i < cks.length; i++) {
        cks[i].onclick = cksHandler;
    }
    check = cks.shift();
    check1 = cks.pop();

    var clear = document.querySelector(".clear");

    clear.addEventListener("click", delHandler);
}


    function objss(obj) {
        imgs.src = obj.img

        pw.innerText = obj.titl;
        pic.innerText = obj.price
        inpt.value = obj.num;
        aggre.innerText = obj.num * obj.price;
    }
    // 获取cookie值

    function getCookie() {
        let obje = {};
        // console.log(document.cookie)
        var arr = document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            var arr1 = str.split("=");
            var key = arr1[0];
            var value = arr1[1];
            // console.log(arr1,key,value);
            obje[key] = value;
        }
        return obje;
    }

// 改变数量
    function addiHandler() {
        pos++;
        if (pos >= 20) pos = 20;
        inpt.value = pos;
        aggre.innerText = obj.price * pos;

    }
    function subHandler(e) {
        pos--;
        if (pos <= 0) pos = 1;
        inpt.value = pos;
        aggre.innerText = obj.price * pos;
    }
    // 删除
    function delHandler() {
        let slist = document.querySelector(".slist");
        let tbody = document.querySelector("tbody");
        console.log(slist)
        tbody.removeChild(slist);
        del.removeEventListener("click", delHandler);
        
       
    }
    // 全选
    var num11=0;
    var ch=document.querySelector(".ch");
    var zj=document.querySelector(".zj")
    function cksHandler(e) {
        zj.innerText=pos*obj.price;
        if (e.target === check || e.target === check1) {
            cks.forEach(function (item) {
                // console.log(item);
                // checked   多选框是否被选中 如果需要让多选框选中设置为true就可以
                item.checked = e.target.checked;
                check1.checked = e.target.checked;
                check.checked = e.target.checked;
                // item.checked=check.checked=check1.checked;
                num11 = btp();
                
            })
        } else {
            check.checked = cks.every(function (item) {
                num11 = btp();
                return item.checked;
            })
            check1.checked = cks.every(function (item) {
                
                return item.checked;
            })
        }
        
        
        ch.innerText=num11;
    }
    
    function btp(){
        let num = 0;
        for(let i=0;i<cks.length;i++){
            if(cks[i].checked){
                num++;
                // console.log(num++)
            }
            
        }
        return num;
    }
