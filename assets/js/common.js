$(document).ready(function (){  
    var scrollY;
    var timer = 0;

    var _gnb = $('#gnb')
    var _mGnb = $('#mGnb') 

    $(window).on('scroll', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();
            
            $('.fade').each(function () {
                if(scrollT > $(this).offset().top - 600) $(this).addClass('on');
            });
        }, 50);
    });

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
            if($(this).hasClass('active')) {
                _mGnb.stop().animate({left: '100%'}, 300, function () {
                    $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
                });
    
            $(this).removeClass('active').find('blind-b').text('메뉴 열기');
            } else {
                var scrollMove = scrollT;
                console.log(scrollMove);
    
                $(this).addClass('active').find('blind-b').text('메뉴 닫기');
                var $first = _gnb.find('[data-link=first]');
                var $last = _gnb.find('[data-link=last]');
    
                _gnb.css({display: 'block'}).stop().animate({left: 0}, 300, function () {
                    $first.focus();
                });
    
                $first.on('keydown', function (e) {
                    console.log(e.keycode);
                    if(e.shiftKey && e.keyCode == 9) {
                        e.preventDefault();
                        $last.focus();
                    }
                });
    
                $last.on('keydown', function (e) {
                    if(!e.shiftKey && e.keyCode == 9) {
                        e.preventDefault();
                        $('.btn_menu').focus();
                    }
                });
            }
    
            //depth1 a click
            _gnb.find('>ul>li>a').on('click', function () {
                if($(this).next().size() === 0) {
                    location.href=$(this).attr('href');
                } else {
                    $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("fast");
                    $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
                }
                return false;
            });
        });

});