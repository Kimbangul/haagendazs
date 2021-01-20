$(document).ready(function(){


    function naviMenuOpen_init(){
        
        var navi = $('header > nav#menu');
        var naviMenu = $('header > nav#menu > ul.depth-1 > li');

        function naviMenuOpen(){
            $(naviMenu).hover(
                function(){
                    console.log("on");
                    $(navi).addClass("on");
                },
                function(){
                    console.log("off");
                    $(navi).removeClass("on");
                }
            )
        }

        naviMenuOpen();


    }

    naviMenuOpen_init();


});