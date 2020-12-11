$(document).ready(function (){  
    var scrollY;
    var timer = 0;

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

        //pc
    //1) #pcGnb 네비
    var _pcGnb = $('#pcGnb > ul');

    _pcGnb.find('.dep2wrap').hide();
    _pcGnb.find('> li > a').on('mouseenter focus', function () {
        console.log('_pcGnb');
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
});