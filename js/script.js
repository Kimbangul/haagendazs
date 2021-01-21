$(document).ready(function(){


    function naviMenuOpen_init(){
        
        var $navi = $('header > nav#menu');
        var $naviMenu = $('header > nav#menu > ul.depth-1 > li');
        var $naviSubMenu = $('header > nav#menu > ul.depth-1 > li > ul.depth-2 ');
        var $menuBg = $('header > nav#menu > div.nav-bg');

        function naviMenuOpen(){
            $($naviMenu).hover(
                function(){
                    // console.log("on");
                    // $(navi).addClass("on");
                    $($menuBg).stop().slideDown(350);
                    $($naviSubMenu).stop().slideDown(400);

                },
                function(){                    
                    $($menuBg).stop().slideUp(300);
                    $($naviSubMenu).stop().slideUp(250);
                }
            )
        }

        naviMenuOpen();


    }


   function fixHeader_init(){

    var $sectionTop = $('section#slide').offset().top;   
    var $header = $('header');
    
        function fixHeader(){
            var $current = $(window).scrollTop();
    
            if ($current >= $sectionTop){       
                $($header).addClass("fixed");
            }
            else {

                $($header).removeClass("fixed");

            }

            
        }  


        $(window).scroll(fixHeader);
        
    }

    function mainSlide_init(){
        $('div#slider').slick({
            slide: 'div',
            infinite: true,
            slidesToShow:1,
            arrows : true,
            speed: 700,
            autoplay : true,
            autoplaySpeed: 5000,
            dots: true,
            prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
            nextArrow : "<button type='button' class='slick-next'>Next</button>",
            dotsClass: "dots",
            draggable: true

        });

        function slideBgAdd(){
            $targetSlide = $('section#slide > div#slider > div');
            $slideNum = $targetSlide.data('slidenum');
            $slideImgSrc = $targetSlide.find('img').attr('src');
            console.log($slideImgSrc);
            console.log($slideNum);
            
            $targetSlide.css({"background":"url("+ $slideImgSrc + ")"})
        }

        slideBgAdd();

    }




    naviMenuOpen_init();
    fixHeader_init();
    mainSlide_init();


});