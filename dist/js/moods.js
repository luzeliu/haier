define([
    'jquery',
    'jquery-cookie'
], function($) {
    var list=document.querySelectorAll(".mood .sub ul li");
    // console.log(list)
    for(let i=0;i < list.length;i++){
        list[i].index=i;
        list[i].addEventListener("click",clickHandler);
    }
    function clickHandler(){
        let prop=this.index;
        for(let n=0;n<list.length;n++){
            if(n===prop){
                this.style.borderBottom=" 10px solid #0c5ca8";
            }else{
                list[n].style.borderBottom="none";
            }
        }
        $.ajax({
            url:"../data/moods.json",
            success:function(arr){
                var str=``;
                for(let i = 0;i < arr[prop].length;i++){
                    str += `<li>
                    <a href="">
                      <img src=${arr[prop][i].img} alt="" />
                      <div class="p1">${arr[prop][i].title}</div>
                      <div class="p2">${arr[prop][i].model}</div>
                      <div class="see">
                        了解更多
                      </div>
                      <span><img src=${arr[prop][i].sen} alt=""></span>
                    </a>
                  </li>`
                }
                $(".mood .stance ul").html(str);
            },
            error:function(){
                console.log("精品推荐数据出错")
            }
        })
    }
    function init(){
        list[0].style.borderBottom=" 10px solid #0c5ca8";
        $.ajax({
            url:"../data/moods.json",
            success:function(arr){
                var str=``;
                for(let i = 0;i < arr[0].length;i++){
                    str += `<li>
                    <a href="">
                      <img src=${arr[0][i].img} alt="" />
                      <div class="p1">${arr[0][i].title}</div>
                      <div class="p2">${arr[0][i].model}</div>
                      <div class="see">
                        了解更多
                      </div>
                      <span><img src=${arr[0][i].sen} alt=""></span>
                    </a>
                  </li>`
                }
                $(".mood .stance ul").html(str);
            },
            error:function(){
                console.log("人气排行数据出错")
            }
        })
    }
    return init;
});



