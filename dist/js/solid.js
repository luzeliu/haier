define(["jquery"], function ($) {
    function banner() {
        $(
            function () {
               /*  var div1 = $(".banner").find(".lun a");
                var div2 = $(".banner").find(".lun a");
                var leftBn = $(".btn").find(".leftBn");
                var rightBn = $(".btn").find(".rightBn");
                var list = $(".dot").find("ul li");

                leftbn.addEventListener("click", clickHandler);
                rightbn.addEventListener("click", clickHandler);
                list.forEach(function (item) {
                    item.addEventListener("mouseenter", dotHandler);
                }); */
                var  div2, leftbn, rightbn, list, pred, time;
                var pos = 0;
                init();
                function init() {
                  div2 = document.querySelector(".lun");
                  leftbn = document.querySelector(".leftBn");
                  rightbn = document.querySelector(".rightBn");
                  list = Array.from(document.querySelectorAll(".dot li"));
                  leftbn.addEventListener("click", clickHandler);
                  rightbn.addEventListener("click", clickHandler);
                  list.forEach(function (item) {
                    item.addEventListener("click", dotHandler);
                  });
                  changeDot();
                }
                div2.addEventListener("mouseenter", enterHandler);
                div2.addEventListener("mouseleave", leaveHandler);
                leftbn.addEventListener("mouseenter", enterHandler);
                rightbn.addEventListener("mouseenter", enterHandler);
                function enterHandler() {
                    leftbn.style.display='block';
                    rightbn.style.display='block';
                  clearInterval(time);
                }
                function leaveHandler() {
                    leftbn.style.display='none';
                    rightbn.style.display='none';
                  time = setInterval(inTime, 3000);
                }
                time = setInterval(inTime, 3000);
                function inTime() {
                  pos++;
                  if (pos < 0) {
                    pos = 3;
                  } else {
                    if (pos > 3) pos = 0;
                  }
                  changeDot();
                }
                function clickHandler() {
                  if (this === leftbn) {
                    pos--;
                    if (pos < 0) pos = 3;
                  } else {
                    pos++;
                    if (pos > 3) pos = 0;
                  }
                  changeDot();
                }
                function dotHandler() {
                  pos = list.indexOf(this);
                  div2.style.left = pos * -1535 + "px";
                
                  changeDot();
                }
                function changeDot() {
                  div2.style.left = pos * -1535 + "px";
                  if (pred) {
                    pred.style.border = "none";
                  }
                  pred = list[pos];
                  pred.style.border = "1px solid #ffffff";
                }
                

            }
        )
    }
    return {
        banner: banner,
    }
})