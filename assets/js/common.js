$(document).ready(function (){  
    var timer = 0;
    var resizeTimer = 0;

    var _gnb = $('#gnb')


    $(window).on('scroll', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();
            
            $('.fade').each(function () {
                if(scrollT > $(this).offset().top - 600) $(this).addClass('on');
            });
        }, 50);
    });

    //사이즈에 변화가 생길때 마다 pc/mobile 버전을 체크하여 body.pc / body.mobile 이라고 함
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
    
        resizeTimer = setTimeout(function () {
            var winWidth = $(window).width();
            if (winWidth > 1439) {  //pc일 경우
                $('body').removeClass('mobile').addClass('pc');
            } else {    //모바일일 경우
                $('body').removeClass('pc').addClass('mobile');
            }
        }, 100);
    });
    $(window).trigger('resize');

        //pc
    //1) #pcGnb 네비
    var _pcGnb = $('#pcGnb > ul');

    _pcGnb.find('.dep2wrap').hide();
    _pcGnb.find('> li > a').on('mouseenter focus', function () {
        _pcGnb.find('>li.on').removeClass('on').children('.dep2wrap').hide();
        $(this).next().show().parent().addClass('on');
    });
    _pcGnb.on('mouseleave', function () {
        $(this).find('>li.on').removeClass('on').children('.dep2wrap').hide();
    });

    _pcGnb.find('a:first, a:last').on('blur', function () {
        setTimeout(function () {
            if( !$('#pcGnb a').is(':focus') ) _pcGnb.mouseleave();
        }, 10);
    });

    //2) 언어 선택 버튼
    var _lang = $('#header .lang > button');

    _lang.next().hide();
    _lang.on('mouseenter click', function () {
        
        $(this).next().show();
        
        $('.lang').on('mouseleave', function () {
            $(this).children('ul').hide();
        });

        $('.lang').find('button:first, a:last').on('blur', function () {
            setTimeout(function () {
                if( !$('#header .lang a, #header .lang button').is(':focus')) _lang.mouseleave();
            }, 10);
        });

    });

    //모바일 메뉴 열기
    $('#mHeader .menu_open').on('click', function () {
        var _mGnb = $('#mHeader .mUtil');
        var _first = _mGnb.find('.first');
        var _last = _mGnb.find('.last');
        _mGnb.find('#mGnb ul li ul').hide();

        _mGnb.css({visibility: 'visible'}).stop().animate({right: 0}, 300, function () {
            _first.focus();
        });

        _first.on('keydown', function (e) {
            console.log(e.keycode);
            if(e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                _last.focus();
            }
        });

        _last.on('keydown', function (e) {
            if(!e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                _first.focus();
            }
        });

        _mGnb.find('.mClose').on('click', function () {
            _mGnb.stop().animate({right: '-100%'}, 300, function () {
                $(this).css('visibility', 'hidden').find('#mGnb>ul>li.on').removeClass('on').children('ul').stop().slideUp();
            });
        });


        //depth1 a click
        _mGnb.find('#mGnb>ul>li>a').on('click', function () {
            if($(this).next().size() === 0) {
                location.href=$(this).attr('href');
            } else {
                $(this).next().stop().slideToggle().parent().toggleClass('on').siblings().removeClass('on').children('ul').stop().slideUp();
            }
            return false;
        });
    });

});