$(document).ready(function(){
    /* 
            var timer = 0;
            $(window).on('resize', function () {
                clearTimeout(timer);

                timer = setTimeout(function () {
                    if($(this).width() > 1024) createFullpage();
                    else fullpage_api.destory('all');
                }, 50);
            });

            $(window).trigger('resize');

            function createFullpage() {
                $('#fullpage').fullpage({
                    navigation: true,
                    navigationPosition: 'left',
                    navigationTooltips: ['GoPro 소개', '신제품 소개', '카메라 비교', '카테고리', '뉴스', '동영상', '인스타그램'],
                    afterRender: function() {
                        $('#fp-nav .fp-tooltip').attr('aria-hidden', true);
                    },
                    onLeave: function(origin, destination, direction) {
                        if (origin.index === 1 && destination.index === 0 && direction === 'up') {
                            $('#pcHeader').removeClass('on active');
                        } else {
                            $('#pcHeader').addClass('on active');
                        }
                    }
                });
            } */

            var cnt1Swiper = new Swiper('#cnt1 .swiper-container', {
                // Optional parameters
                loop: true,
    
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                autoplay: {
                    delay: 16000,
                },
    
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //현재 이벤트에 특정 이벤트를 넣고 싶은 경우
                on: {
                    slideChangeTransitionStart: function (swiper) { 
                        //활성화된 슬라이드에 사용자지정속성인 data-swiper-slide-index를 가져와서 오른쪽 위치만 지정한다
                        var tgIdx = $('#cnt1 .swiper-slide-active').data("swiper-slide-index");
                        console.log(tgIdx);  //0,1,2
                        if (tgIdx === 1) $('#cnt1').addClass('right');
                        else $('#cnt1').removeClass('right');
                    },
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


    //cnt2 마우스, 키보드 제어로 클래스 추가
    $('#cnt2 .newbie .newbieTxt > strong').attr('tabIndex', 0);
    $('#cnt2 .newbie .newbieTxt > strong').on({
        'mouseenter focusin': function () {
        $(this).addClass('on');
        },
        'mouseleave focusout': function () {
        $(this).removeClass('on');
        }
    });
    $('#cnt2 .newbie .newbieTxt > strong > newbieDetail').attr('tabIndex', 0);
    $('#cnt2 .newbie .newbieTxt > strong > newbieDetail').on({
        'mouseenter focusin': function () {
        $(this).addClass('on');
        },
        'mouseleave focusout': function () {
        $(this).removeClass('on');
        }
    });

    //cnt5
    $('#cnt5 .newsCntWrap ul li a').on('mouseenter focus', function () {
        $(this).addClass('on').parent().siblings().children().removeClass('on');
    });

    //cnt6
    var windowH = $(window).height();
    $(window).on('scroll', function () {
        var scrollT = $(this).scrollTop();

        if (scrollY === 0) {
            $('#header').css({position: 'fixed', top: 'auto', bottom: 0});
        } else if (scrollY < $(window).height()) {
            $('#header').css({absolute: 'absolute', top: windowH-scrollY, bottom: 'auto'});
            $('#pcGnb > ul > li > ul').css({bottom: 0, top: 90});
        } else {
            $('#header').css({absolute: 'fixed', top: 0, bottom: 'auto'});
        }
        
        //텍스트 marquee 효과
        if (scrollT > $('.marquee').offset().top - 300) {
            $('.marquee').animate().attr({left: -500});
        }
    });
}); 
