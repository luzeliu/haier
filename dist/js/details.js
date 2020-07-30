define([
    'jquery',
    'jquery-cookie'
], function($) {
    return init;
    
});
var min,move,max;
function init(){
     min=document.querySelector(".glass .min");
     move=document.querySelector(".glass .min .move");
     max=document.querySelector(".glass .max");
    min.addEventListener("mouseenter",enterHandler);
    changeF();
}
function enterHandler(e){
    if (e.type === "mouseenter") {
        move.style.display = max.style.display = "block"
        min.addEventListener("mouseleave", enterHandler);
        min.addEventListener("mousemove", enterHandler);
    } else if (e.type === "mousemove") {
        // 获取min块的相对视口位置，矩形
        move1(e.clientX, e.clientY);
    } else if (e.type === "mouseleave") {
        move.style.display = max.style.display = "none"
        min.removeEventListener("mouseleave", enterHandler);
        min.removeEventListener("mousemove", enterHandler);
    }
}
function move1(mouseX, mouseY) {
    var rect = min.getBoundingClientRect();
    x = mouseX - move.offsetWidth / 2 - rect.x;
    y = mouseY - move.offsetWidth / 2 - rect.y;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > min.offsetWidth - move.offsetWidth) x = min.offsetWidth - move.offsetWidth;
    if (y > min.offsetWidth - move.offsetWidth) y = min.offsetWidth - move.offsetWidth;
    move.style.left = x + "px";
    move.style.top = y + "px";
    max.style.backgroundPositionX = -x * (max.offsetWidth / move.offsetWidth) + "px";
    max.style.backgroundPositionY = -y * (max.offsetWidth / move.offsetWidth) + "px";
}
var iconList=["http://image.haier.com/cn/cooling/W020190917752397655647.png",
"http://image.haier.com/cn/cooling/W020190917752399675674.png",
"http://image.haier.com/cn/cooling/W020190917752400010802.png",
"http://image.haier.com/cn/cooling/W020190917752400283499.png",
"http://image.haier.com/cn/cooling/W020190917752400706733.png",
"http://image.haier.com/cn/cooling/W020190917752401057888.png",
"http://image.haier.com/cn/cooling/W020190917752401335692.png",
"http://image.haier.com/cn/cooling/W020190917752401690911.png"];
const IMAGE_MARGIN = 9;
const IMAGE_WIDTH = 58;
var bnList = [],
pos = 0;
function ce(type,style){
    let elem=document.createElement(type);
    Object.assign(elem.style,style);
    return elem;
}
var parent=document.querySelector(".glass");
createCarousel(parent);
function createCarousel(parent) {
    var div = ce("div", {
        position: "absolute",
        width: 450 + 2 + "px",
        height: "58px",
        top: 504 + "px",
        left:150+"px"
    })
    var left = ce("div", {
        width: "22px",
        height: "32px",
        top: "13px",
        backgroundImage: "url(./images/sprite.png)",
        backgroundPositionX: "0px",
        backgroundPositionY: "-54px",
        position: "absolute",
    });
    // 复制标签 会将标签的所有标签属性完全复制
    var right = left.cloneNode(false);
    left.style.left = "0px";//先复制以后再加
    Object.assign(right.style, {
        right: "0px",
        backgroundPositionX: "-78px",
        backgroundPositionY: "0px",
    })
    bnList.push(left);
    bnList.push(right);
    div.appendChild(left);
    div.appendChild(right);

    var con = ce("div", {
        position: "absolute",
        width: "380px",
        height: "58px",
        left: "36px",
        overflow: "hidden",
    })
    div.appendChild(con);
    createImageCon(con);
    parent.appendChild(div);
    div.addEventListener("click", clickHandler);
}

function createImageCon(parent) {
    var width = iconList.length * IMAGE_WIDTH + iconList.length * IMAGE_MARGIN * 2 - IMAGE_MARGIN;
    
    imgCon = ce("div", {
        position: "absolute",
        width: width + "px",
        height: "58px",
        left: 0,
        transition: "all 0.5s"
    });
    for (var i = 0; i < iconList.length; i++) {
        var img = ce("img", {
            float:"left",
            width: IMAGE_WIDTH - 4 + "px",
            height: IMAGE_WIDTH - 4 + "px",
            border: `1px solid rgba(255,0,0,${i == 0 ? 1 : 0})`,
            marginLeft: `${i === 0 ? '0px' : IMAGE_MARGIN + "px"}`,
            marginRight: IMAGE_MARGIN + "px"
        });
        img.src = iconList[i];
        if (i === 0) preImg = img;
        imgCon.appendChild(img);
    }
    imgCon.addEventListener("mouseover", iconMouseHandler);
    parent.appendChild(imgCon);
}

function iconMouseHandler(e) {
    if (e.target.nodeName !== "IMG") return;
    if (preImg) {
        preImg.style.border = "1px solid rgba(255,0,0,0)";
    }
    preImg = e.target;
    preImg.style.border = "1px solid rgba(255,0,0,1)"
    //    console.log( e.target.src.replace("_icon",""));
    min.style.backgroundImage = max.style.backgroundImage = `url(${e.target.src.replace(/_icon/, "")})`;
}
function clickHandler(e) {
    var index = bnList.indexOf(e.target)
    if (index < 0) return
    if (index === 0) {
        pos--;
        if (pos < 0) pos = 0;
        //    imgCon.style.left="0px";
    } else {
        // imgCon.style.left="-380px";
        pos++;
        if (pos > Math.floor(iconList.length / 5)) {
            pos = Math.floor(iconList.length / 5)
        }
    }

    if (pos === Math.floor(iconList.length / 5)) {
        imgCon.style.left = -(imgCon.offsetWidth - 380) + "px"
    } else {
        imgCon.style.left = pos * -380 + "px";
    }

}
// 数量加减
var sum1,addi,sub,pos,but;
function changeF(){
    sum1=document.querySelector(".join .sum .sum1");
    addi=document.querySelector(".join .sum .jia");
    sub=document.querySelector(".join .sum .jian");
    but=document.querySelector("button");
    but.addEventListener("click",clickHandler)
    // console.log(sum1.value)
    sub.addEventListener("click",addiHandler);
    addi.addEventListener("click",subHandler);
    
    setInterval(function(){
        pos=sum1.value;
        if(pos >= 20)pos=20;
        if(pos <= 0)pos=1;
        sum1.value=pos;
    },500)
}


function addiHandler(){
    pos++;
    if(pos >= 20)pos=20;
    sum1.value=pos;
    
}
function subHandler(e){
    pos--;
    if(pos <= 0)pos=1;
    sum1.value=pos;
}
function clickHandler(e){
    var obj={
        titl:"TCL 515升 双变频风冷无霜对开门双开门电冰箱 智慧摆风 电脑控温 纤薄机身（典雅银）BCD-515WEPZ50",
        price:2255,
        img:"http://image.haier.com/cn/cooling/W020190917752401057888.png",
        num:pos
    }
    for(var prop in obj){
        document.cookie=prop+"="+obj[prop];
    }
    
}