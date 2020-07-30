define([
    'jquery',
    'jquery-cookie'
], function ($) {
    function init() {
        let lists = $(".nav .nav-bar ul .sole .li-d dl dt");
        for (let i = 0; i < lists.length; i++) {
            lists[i].index = i;
            lists[i].addEventListener("mouseenter", enterHandler);
            // lists[i].addEventListener("mouseenter", enterHandler);
        }
    }
    function enterHandler() {
       var q=$(".nav-bar ul .sole .li-d .menu").css("display","block");
        let prop = this.index;

        $.ajax({
            url: "../data/pic.json",
            success: function (arr) {
                

                var str = `<p>${arr[prop].span}</p>
                  <ul>`;
                for (let j = 0; j < arr[prop].li.length; j++) {
                    str += "<li>";
                    str += arr[prop].li[j];
                    str += "</li>";
                    // str += $("<li></li>").text(`arr[prop].li[j]`)
                }
                str += `</ul>
                    <div class="pic">
                <ul>
                  <li>
                    <img src="./images/daohang.png" alt="" />
                  </li>
                  <li class="wo">
                    <p class="wo1">海尔智慧家庭</p>
                    <p class="wo2">定制美好生活</p>
                    <span>了解更多</span>
                  </li>
                </ul>
              </div>`;

                $(".nav .nav-bar ul .sole .li-d .menu").html(str);
            }

        })
    }
    return init;

});