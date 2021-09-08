    var navi = $('header ul li')
    var page = $('main > section')

    navi.click(function () {
        var index = $(this).index();
        var pageMove = page.eq(index)
        var pageTop = pageMove.offset().top

        $('html,body').animate({
            scrollTop: pageTop
        }, 500)
    });

    $(window).scroll(function () {
        var Cscroll = $(this).scrollTop()

        page.each(function () {
            var target = $(this)
            var index = target.index()

            if (Cscroll >= target.offset().top) {
                navi.removeClass('active')
                navi.eq(index).addClass('active')
            }
        })
    })

    $('.sect2_box1').show();

    $('.tab_title li').click(function () {
        var tab = $(this).index()

        $(this).children('.bk1,.bk2').addClass('hover');
        $(this).siblings().children('.bk1,.bk2').removeClass('hover');
        $('.tab_cont').children().fadeOut();
        $('.tab_cont').children().eq(tab).fadeIn(1000);
        $('.tab_cont > div').siblings().find('h1').removeClass('line');
        $('.tab_cont > div').eq(tab).find('h1').addClass('line');
        $('.tab_cont > div').siblings().find('p').removeClass('read');
        $('.tab_cont > div').eq(tab).find('p').addClass('read');
    });

    $('.poster').click(function () {
        $('.popup').fadeIn();
    })
    $('.exit').click(function () {
        $('.popup').fadeOut(1000);
    })

    $(document).mouseup(function (e){
        var LayerPopup = $(".popup");
        if(LayerPopup.has(e.target).length === 0){
          LayerPopup.fadeOut(1000);
        }
      }); //외부 영역 클릭시 팝업창 닫힘