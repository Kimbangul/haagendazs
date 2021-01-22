$(document).ready(function () {


    function naviMenuOpen_init() {

        var $navi = $('header > nav#menu');
        var $naviMenu = $('header > nav#menu > ul.depth-1 > li');
        var $naviSubMenu = $('header > nav#menu > ul.depth-1 > li > ul.depth-2 ');
        var $menuBg = $('header > nav#menu > div.nav-bg');

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

        naviMenuOpen();


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
                prevArrow: "<button class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
                nextArrow: "<button class='slick-next'>Next</button>",
                dotsClass: "dots",
                draggable: true

            });

        }


        function slideBgAdd() {
            var $targetSlide = $('section#slide > div#slider div.slide-box').has('img');

            $targetSlide.each(function () {
                var $slideImgSrc = $(this).find('img').attr('src');

                $(this).css({
                    "background": "url(" + $slideImgSrc + ")"
                });
            });
        }

        slideBgAdd();
        mainSlide();

    }

    function scrollMagic_init() {
        var controller = new ScrollMagic.Controller();

        function animation1() {

            // var tween1 = TweenMax.to('#best-items > div.con > div.row > div.img-con > div.img-box', 1, {
            //     x: "150%",
            //     rotation: 180,                
            // });

            // 스크롤매직 씬 생성

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

        animation1();
    }




    naviMenuOpen_init();
    fixHeader_init();
    mainSlide_init();
    scrollMagic_init();

});