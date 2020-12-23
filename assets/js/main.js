$(document).ready(function(){

            var cnt1Swiper = new Swiper('#cnt1 .swiper-container', {
                // Optional parameters
                loop: true,
    
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
                    },
                },
                autoplay: {
                    delay: 9000,
                },
    
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //현재 이벤트에 특정 이벤트를 넣고 싶은 경우
                on: {
                    init: function () {//로딩바 시작
                        $(".swiper-progress-bar").removeClass("animate active").addClass("animate active");
                    },
                    slideChangeTransitionStart: function (swiper) { 
                        //활성화된 슬라이드에 사용자지정속성인 data-swiper-slide-index를 가져와서 오른쪽 위치만 지정한다
                        if ($('body').hasClass('pc')) {
                            var tgIdx = $('#cnt1 .swiper-slide-active').data("swiper-slide-index");
                            if (tgIdx === 1) $('#cnt1').addClass('right');
                            else $('#cnt1').removeClass('right');
                        }
        
                        $(".swiper-progress-bar").removeClass("animate active").addClass("active");
                    },
                    slideChangeTransitionEnd: function () {//슬라이더 전환종료 로딩바 제어
                        $(".swiper-progress-bar").eq(0).addClass("animate");
                    }
                },
                //접근성
                a11y: {
                    prevSlideMessage: '이전 슬라이드 보기',
                    nextSlideMessage: '다음 슬라이드 보기',
                    firstSlideMessage: '첫번째 슬라이드',
                    lastSlideMessage: '마지막 슬라이드',
                }
            });

            //일시정지 클릭
            $('#cnt1 .controller .autoplay').on('click', function (){
                $(this).hide().siblings().show();
                cnt1Swiper.autoplay.start();
            });
            //자동실행 클릭
            $('#cnt1 .controller .pause').on('click', function () {
                $(this).hide().siblings().show();
                cnt1Swiper.autoplay.stop();
            });


    //cnt2 마우스, 키보드 제어
    $('#cnt2 .newbie .newbieTxt > strong').attr('tabIndex', 0);
    $('#cnt2 .newbie .newbieTxt > strong').on({
        'mouseenter focusin': function () {
        $(this).addClass('on');
        },
        'mouseleave focusout': function () {
        $(this).removeClass('on');
        }
    });
    $('#cnt2 .newbie .newbieTxt > strong > newbieDetail > h3').attr('tabIndex', 0);
    $('#cnt2 .newbie .newbieTxt > strong > newbieDetail > h3').on({
        'mouseenter focusin': function () {
        $(this).addClass('on');
        },
        'mouseleave focusout': function () {
        $(this).removeClass('on');
        }
    });

    //header와 cnt3
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollT = $(this).scrollTop();

        if($(this).width() > 1025) {

            if (scrollY === 0 ) {
                $('#header').css({position: 'fixed', top: 'auto', bottom: 0}).removeClass('fix');
            } else if (scrollY < $(window).height()) {
                $('#header').css({absolute: 'absolute', top: windowH-scrollY, bottom: 'auto'}).removeClass('fix');
                $('#pcGnb > ul > li > ul').css({bottom: 0, top: 90});
            } else {
                $('#header').css({absolute: 'fixed', top: 0, bottom: 'auto'}).addClass('fix');
            }
        }

        //cnt3
        if(scrollT > $("#cnt3").offset().top - 350){
            console.log($(window).scrollTop());
            TweenMax.to($("#cnt3 #camera1 img"), 2, {delay:0, left:'50%', opacity:1, ease:Power3.easeOut});
            TweenMax.to($("#cnt3 #camera2 img"), 2, {delay:0, top:'30%', opacity:1, ease:Power3.easeOut});
            TweenMax.to($("#cnt3 #camera2 a"), 2, {delay:0, bottom:'30%', opacity:1, ease:Power3.easeOut});
            TweenMax.to($("#cnt3 #camera3 img"), 2, {delay:0, left:'50%', opacity:1, ease:Power3.easeOut});
          };


        //텍스트 marquee 효과
        if (scrollT > $('.marquee').offset().top - 300) {
            $('.marquee').animate().attr({left: -500});
        }
    });


    //cnt5
    $('#cnt5 .newsCntWrap ul li a').on('mouseenter focus', function () {
        $(this).addClass('on').parent().siblings().children().removeClass('on');
    });
}); 
