$(document).ready(function () {


    function naviMenuOpen_init() {

        var $navi = $('header > nav#menu');
        var $naviMenu = $('header > nav#menu > ul.depth-1 > li');
        var $naviSubMenu = $('header > nav#menu > ul.depth-1 > li > ul.depth-2 ');
        var $menuBg = $('header > nav#menu > div.nav-bg');
        var $mbNavi = $('nav#mb-menu div.menu-btn ');
        var $mbMenu = $('nav#mb-menu > div.menu');

        function naviMenuOpen() {
            $($naviMenu).hover(
                function () {
                    // console.log("on");
                    // $(navi).addClass("on");
                    $($menuBg).stop().slideDown(350);
                    $($naviSubMenu).stop().slideDown(400);

                },
                function () {
                    $($menuBg).stop().slideUp(300);
                    $($naviSubMenu).stop().slideUp(250);
                }
            )
        }

        function mbNaviMenuOpen(){         


            $($mbNavi).click(function(e){
            
            e.preventDefault();
                           
            if (($mbNavi).hasClass('active')){
                $($mbNavi).removeClass('active');
                $($mbMenu).removeClass('active');
            }
            else{
                $($mbNavi).addClass('active');
                $($mbMenu).addClass('active');
            }

            });
          
        }

        naviMenuOpen();
        mbNaviMenuOpen();


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
                    draggable: true
    
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
                    .addTo(controller) // 컨트롤러 등록                
                    .addIndicators({
                        name: "row " + (i + 1),
                        colorStart: "#F6B352",
                        colorTrigger: "#F6B352"
                    });
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
            .addTo(controller) // 컨트롤러 등록                
            .addIndicators();


        }

        function animation3(){
            

            var scene3 = new ScrollMagic.Scene({
                triggerElement: "section#store",
                triggerHook: 0.5, 
                offset: -100,
               
            })

            .setClassToggle("section#store > div.row", "visible")
            .addTo(controller) // 컨트롤러 등록                
            .addIndicators();


        }

        function animation4(){
            

            var scene4 = new ScrollMagic.Scene({
                triggerElement: "section#start-up",
                triggerHook: 0.5, 
                offset: -350,
               
            })

            .setClassToggle("section#start-up", "visible")
            .addTo(controller) // 컨트롤러 등록                
            .addIndicators();


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