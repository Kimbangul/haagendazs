$(document).ready(function(){


    function naviMenuOpen_init(){
        
        var navi = $('header > nav#menu');
        var naviMenu = $('header > nav#menu > ul.depth-1 > li');
        var naviSubMenu = $('header > nav#menu > ul.depth-1 > li > ul.depth-2 ');
        var menuBg = $('header > nav#menu > div.nav-bg');

        function naviMenuOpen(){
            $(naviMenu).hover(
                function(){
                    // console.log("on");
                    // $(navi).addClass("on");
                    $(menuBg).stop().slideDown(350);
                    $(naviSubMenu).stop().slideDown(400);

                },
                function(){                    
                    $(menuBg).stop().slideUp(300);
                    $(naviSubMenu).stop().slideUp(250);
                }
            )
        }

        naviMenuOpen();


    }

    // function headerFix_init(){
    //     var controller = new ScrollMagic.Controller();

    //     var tween1 = TweenMax.to('.animate1',0.5,{
    //         position: "fixed"
    //     });

    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: ".trigger01",
    //         duration: "100%"         
    //     })
    //     .setTween(tween1)
    //     .addTo(controller)
    //     .addIndicators({
    //         name : "head"
    //     })

    // }

   function fixHeader_init(){

    var sectionTop = $('section#slide').offset().top;   
    var $header = $('header');
    
        function fixHeader(){
            var current = $(window).scrollTop();

            console.log(sectionTop);
            console.log(current);   

    
            if (current >= sectionTop){
                console.log('top');
                $($header).addClass("fixed");
            }
            else {

                $($header).removeClass("fixed");

            }

            
        }
    


        $(window).scroll(fixHeader);
        
    }





    naviMenuOpen_init();
    fixHeader_init();


});