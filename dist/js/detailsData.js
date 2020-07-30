define([
    'jquery',
    'jquery-cookie'
], function($) {
    function init(){
        $(
            $.ajax({
                url:"../data/details.json",
                success:function(arr){
                    var str=`<p class="words">${arr[0].title}</p>
                    <span class="well">【劲爆秒杀到手不高于2299元】先抢先得，手慢无！ 大容量对开，轻松满足一家人食材需求 【产品带劲】风冷养鲜告别除霜的烦恼【TCL品牌日】</span>
                    <div class="boe">
                      <div><span class="bo">京 东 价</span></div>
                      <div class="b1">
                        <span>￥</span>
                        <span>${arr[0].price}</span>
                        <span class="b2">[￥${arr[0].del}]</span>
                        <a href="">降价通知</a>
                      </div>
                      <div class="eva">
                        <p>累计评价</p>
                        <a href="">1.5万+</a>
                      </div>
                      <div class="in">
                        <p>选购指数</p>
                        <a href="">8.2</a>
                      </div>
          
                      <div class="business">
                        增值业务
                        <span>家电回收，以旧换新</span>
                      </div>
                      <div class="weight">
                        重量
                        <span>不计重量</span>
                      </div>
          
                      <div class="color">
                        选择颜色
                        <ul>
                          <li>【行业爆款】515升风冷对开</li>
                          <li>【经典畅销】515升变频风冷对开</li>
                          <li>【大容量】650升风冷对开门</li>
                          <li>【大容量】650升变频风冷对开</li>
                        </ul>
                      </div>
                      <div class="safeguard">
                        增值保障
                        <span>4年全保修 ￥179</span>
                        <span>3年免费换新 ￥242</span>
                        <span>4年制冷保 ￥75</span>
                      </div>
                      <div class="service">
                        京东服务<p>冰箱清洗 ￥119</p>
                      </div>
                      
                    </div>`;
                    $(".glass .right").html(str);
                }
            })
        
        ) 
        
    }

    return init;
    
});
