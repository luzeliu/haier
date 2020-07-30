define([
    'jquery',
    'jquery-cookie'
], function($) {
    function doen(){
        $.ajax({
            url:"../data/product.json",
            success:function(arr){
                var str=``;
                for(let i  = 0;i < arr.length;i++){
                    str += `<li>
                    <a href="./details.html">
                      <img src=${arr[i].img} alt="" />
                    </a>
                    <div class="bo">
                      <p class="bop1">${arr[i].bop1}</p>
                      <p class="model">${arr[i].model}</p>
                      <p class="rp">参考价：<span>￥<span>${arr[i].rp}</span></span></p>
                      <p class="jia1">1家电商在售 <span>${arr[i].jia1}</span></p>
                    </div>
                  </li>`
                }
                $(".bodys .comm ul").html(str);
            },
            error:function(){
                console.log("数据出错")
            }
        })
    }
    return doen;
});