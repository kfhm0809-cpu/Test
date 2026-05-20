$(function () {
    // 메뉴
    $('.main-menu').on('mouseover', function () {
        $('.sub-menu').stop().slideDown();
    })

    $('.main-menu').on('mouseleave', function () {
        $('.sub-menu').stop().slideUp();
    })

    // 이미지 슬라이드
    setInterval(function () {
        $('.image-slide>ul').animate({ marginTop : -300 }, 1000, function () {
            $('.image-slide>ul').append($('.image-slide>ul>li').first());
            $('.image-slide>ul').css('marginTop', 0);
        })
    }, 2000);

    // 공지사항과 갤러리
    $('.notice-gallery>ul>li').on('click', function(){
        console.log($(this).index());

        let i = $(this).index();

        $('.notice-gallery>ul>li').removeClass('tab-active');
        $(this).addClass('tab-active');

        $('.tab-content').removeClass('tab-content-active');
        $(`.notice-gallery>ul>li:nth-of-type(${i+1}) .tab-content`).addClass('tab-content-active');
    })


    // 팝업창
    $('.pop').on('click', function(){
        $('dialog')[0].showModal();
    })

    $('.button-wrap>button').on('click', function(){
        $('dialog')[0].close();
    })
})
