$(document).ready(function () {


    function naviMenuOpen_init() {

        var $navi = $('header > nav#menu');
        var $naviMenu = $('header > nav#menu > ul.depth-1 > li');
        var $naviSubMenu = $('header > nav#menu > ul.depth-1 > li > ul.depth-2 ');
        var $menuBg = $('header > nav#menu > div.nav-bg');
        var $mbMenuBtn = $('nav#mb-menu div.menu-btn ');
        var $mbMenuCate = $('nav#mb-menu > div.menu');
        var $mbMenuDepth1 = $('header nav#mb-menu > div.menu > div.menu-list > ul.depth-1 > li');

        function naviMenuOpen() {
            $($naviMenu).hover(
                function () {
                    $($menuBg).stop().slideDown(350);
                    $($naviSubMenu).stop().slideDown(400);

                },
                function () {
                    $($menuBg).stop().slideUp(300);
                    $($naviSubMenu).stop().slideUp(250);
                }
            )
        }

        function mbNaviMenuSlideOpenClose(){         


            function mbNaviMenuSlideOpen(){
                $($mbMenuBtn).addClass('active');
                $($mbMenuCate).addClass('active');
                $('body').addClass('prohibit-scroll');
            }


            function mbNaviMenuSlideClose(){
                $($mbMenuBtn).removeClass('active');
                $($mbMenuCate).removeClass('active');
                $('body').removeClass('prohibit-scroll');
            }

            $($mbMenuBtn).click(function(e){
            
            e.preventDefault();
                           
            if (($mbMenuBtn).hasClass('active')){
                mbNaviMenuSlideClose();
            }
            else{
                mbNaviMenuSlideOpen();
            }

            });



            $('div.menu').click(function(e){
   
                if (!$('div.menu-list').has(e.target).length) {
                    mbNaviMenuSlideClose();
                }
            
            });

        }

        function mbNaviMenuListOpen(){
            $($mbMenuDepth1).click(function(e){

                var $mbMenuDepth2 = $(this).find('ul.depth-2');

                if ($mbMenuDepth2.length > 0){
                    e.preventDefault();

                    if ($(this).hasClass('active')){
                        $(this).removeClass('active');
                        $mbMenuDepth2.stop().slideUp(300);
                        
                    }
                    else{
                     $(this).addClass('active');
                     $mbMenuDepth2.stop().slideDown(300);
                     $(this).siblings('li').removeClass('active').find('ul.depth-2').stop().slideUp(300);
                    }

                }



                
            });
        }

        naviMenuOpen();
        mbNaviMenuSlideOpenClose();
        mbNaviMenuListOpen();

    }


    function fixHeader_init() {

        var $sectionTop = $('section#slide').offset().top;
        var $header = $('header');

        function fixHeader() {
            var $current = $(window).scrollTop();

            if ($current >= $sectionTop) {
                $($header).addClass("fixed");
            } else {

                $($header).removeClass("fixed");

            }


        }

        fixHeader();
        $(window).scroll(fixHeader);

    }

    function mainSlide_init() {
       
        function mainSlide() {

            $('div#slider').on("init", function(e, slick){
               if (slick.currentSlide === 0){
                var mainSlideBtn = $('section#slide > div#slider > button.slick-arrow.slick-next, section#slide > div#slider > button.slick-arrow.slick-prev');
                var mainSlideDot = $('section#slide > div#slider > ul.dots > li > button');
                mainSlideBtn.addClass('white');
                mainSlideDot.addClass('white');
               }
            })

            $('div#slider').slick({
                slide: 'div',
                infinite: true,
                slidesToShow: 1,
                arrows: true,
                speed: 700,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
                fade: true,
                prevArrow: "<button class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
                nextArrow: "<button class='slick-next'>Next</button>",
                dotsClass: "dots",
                draggable: true

            });

  

            $('div#slider').on("afterChange", function(e, slick, currentSlide){
                mainSlideBtn = $('section#slide > div#slider > button.slick-arrow.slick-next, section#slide > div#slider > button.slick-arrow.slick-prev');
                mainSlideDot = $('section#slide > div#slider > ul.dots > li > button');
                if (currentSlide === 0){
                    mainSlideBtn.addClass('white');
                    mainSlideDot.addClass('white');
                }
                else{
                    mainSlideBtn.removeClass('white');
                    mainSlideDot.removeClass('white');
                }
            })
            }

            function SNSSlide() {
                $('div#slider2').slick({
                    slide: 'div',
                    infinite: true,
                    slidesToShow: 4,
                    arrows: true,
                    speed: 700,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,              
                    prevArrow: "<button class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
                    nextArrow: "<button class='slick-next'>Next</button>",
                    dotsClass: "dots",
                    draggable: true,

                    responsive: [
                        {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 501,
                            settings: {
                                slidesToShow: 2
                            }
                        }


                    ]
    
                });

        }

        

        mainSlide();
        SNSSlide();

    }

    function scrollMagic_init() {
        var controller = new ScrollMagic.Controller();

        function animation1() {

            var revealElements = $('#best-items > div.con > div.row');


            for (var i = 0; i < revealElements.length; i++) {
                var scene1 = new ScrollMagic.Scene({
                        triggerElement: revealElements[i],
                        triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                        offset: -300,
                        // duration: "100%",
                    })

                    .setClassToggle(revealElements[i], "visible")
                    .addTo(controller); // 컨트롤러 등록                

            }

        }
        
        function animation2(){
            

            var scene2 = new ScrollMagic.Scene({
                triggerElement: "section#sns",
                triggerHook: 0.5, //viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정
                offset: -200,
                // duration: "100%",
            })

            .setClassToggle("section#sns", "visible")
            .addTo(controller); // 컨트롤러 등록                
           


        }

        function animation3(){
            

            var scene3 = new ScrollMagic.Scene({
                triggerElement: "section#store",
                triggerHook: 0.5, 
                offset: -100,
               
            })

            .setClassToggle("section#store > div.row", "visible")
            .addTo(controller); // 컨트롤러 등록                
            


        }

        function animation4(){
            

            var scene4 = new ScrollMagic.Scene({
                triggerElement: "section#start-up",
                triggerHook: 0.5, 
                offset: -350,
               
            })

            .setClassToggle("section#start-up", "visible")
            .addTo(controller); // 컨트롤러 등록                
          


        }

        animation1();
        animation2();
        animation3();
        animation4();
    }






    naviMenuOpen_init();
    fixHeader_init();
    mainSlide_init();
    scrollMagic_init();
   

});