$(function () {
    //jQery준비
    $('.menu_sec').hide();
    $('header .header_center ul li').mouseenter(function () {
        $(this).find('.menu_sec').stop().slideDown(300);
    }).mouseleave(function () {
        $(this).find('.menu_sec').stop().slideUp(300);
    });

    //모바일 네비게이션 바 복제
    var naviClon = $('#menu').contents().clone();
    var navi_list = $('<div id="sm_menu"></div>');
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi');

    $('#m_menu').click(function () {
        $('#mb_navi').toggleClass('open');
        if ($('#mb_navi').hasClass('open')) { //열린상
            $('#mb_navi').stop(true).animate({
                right: 0
            }, 500);
            $('body').css('overflow-y', 'hidden');

        } else { //닫힌상태
            $('#mb_navi').stop(true).animate({
                right: '-100%'
            }, 500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('body').css('overflow-y', 'scroll');
        }
        $(this).toggleClass('cross');
    });

    /*모바일 각 메뉴 클릭시 서브메뉴 펼침*/
    $('#sm_menu > ul > li > a').click(function () {
        $(this).toggleClass('selected');
        $('#sm_menu > ul > li > a ').not(this).removeClass('selected');
        $(this).find('+div').slideToggle('fast');
        $('#sm_menu > ul > li > a').not(this).find('+div').slideUp('fast');
    });

    /*pc화면 사이즈에서 모바일 메뉴 사라지고 초기화기*/
    $(window).resize(function () {
        if ($(this).width() > 748) {
            $('#mb_navi').css('right', '-100%');
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $('#mb_navi').removeClass('open');
            $('#m_menu').removeClass('cross');
            $('#m_menu > a').find('img').attr('src', 'img/main/main_mobile1.png');
            $('body').css('overflow', 'scroll');
        };
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, //보여지는 슬라이드 개수
        spaceBetween: 0, //슬라이드 사이 공간
        loop: true, // 반복 슬라이드
        keyboard: {
            enabled: true, //키보드 제어
        },
        /*  autoplay: {
              delay: 5000, // 4초마다 슬라이드
              disableOnInteraction: true, //버튼 제어시 멈춤
          },*/
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //블릿버튼 제어
        },
        navigation: { //이전다음버튼 제어
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}); //jQery 종료