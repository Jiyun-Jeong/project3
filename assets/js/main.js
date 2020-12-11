$(document).ready(function(){
/*     $('.categoryWrap > .otherWrap > a').on('mouseenter', function () {
        e.prevenDefault();
        $(this).find("> img:first-child").stop().fadeOut();
        $(this).find("> .hoverImg").stop().fadeIn();
    });
    $('.categoryWrap > .otherWrap > a').on('mouseleave', function () {
        $(this).find("> .hoverImg").stop().fadeOut();
        $(this).find("> img:first-child").stop().fadeIn();
    }); */



    //cnt5
    var _acco = $('.newsWrap');

    //로딩 설정 : .tit 첫번째에 .on추가, 바로뒤 형제 아코디언패널 보여지게, 포커스 갈수 있도록 tabIndex 추가 , aria의 state 설정
    _acco.find('.tit:first').addClass('on').next().show().attr('tabIndex', 0);
    _acco.find('.tit:first .newsheader').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.tit').children().attr('aria-expanded', false);

    //2) 아코디언 헤더에 keydown 이벤트 - 키보드제어 : 아래방향키(40), 위방향키(38), home(36), end(35), enter(13), space bar(32) 제어 => switch case문
    _acco.find('.newsheader').on('keydown', function (e) {
        var key = e.keyCode;
        console.log(key);
        switch (key) {
            case 40: //아래 방향키
                if ($(this).hasClass('last')) {
                    $(this).closest('.newsWrap').find('.tit .first').focus();
                } else {
                    $(this).parent().next().next().children().focus();
                }
                break;
            case 38: //위 방향키
                if($(this).hasClass('first')) {
                    $(this).closest('.newsWrap').find('.tit .last').focus();
                } else {
                    $(this).parent().prev().prev().children().focus();
                }
                break;
            case 36: //home
                e.preventDefault();
                $(this).closest('.newsWrap').find('.tit .first').focus();
                break;
            case 35: //end
                e.preventDefault();
                $(this).closest('.newsWrap').find('.tit .last').focus();
                break;
            case 13: //enter
            case 21: //space bar
                $(this).trigger('click');
                break;
        }
    });

    //3) 아코디언 헤더 click 이벤트: 열려지지 않은 패널만 제어 - 마우스
    _acco.find('.newsWrap').on('click', function () {
        if ( !$(this).parent().hasClass('on')) {
            $(this).attr({'aria-expanded': true, 'aria-disabled': true}).parent().addClass('on').siblings('.tit.on').removeClass('on').children().attr('aria-expanded', false).removeAttr('aria-disabled');
            $(this).parent().next().stop().slideDown('fast').attr('tabIndex', 0).siblings('.newspanel').stop().slideUp('fast').attr('tabIndex' -1);
        }
    });
});