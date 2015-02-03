//in case js is turned off
$(window).on('load', function () {
    $("#header-scroll").removeClass("small")
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 1) {
        $("#header-scroll").addClass("small")
    } else {
        $("#header-scroll").removeClass("small")
    }
});

//scrollspy
$(window).on('scroll', function () {
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight()
        , cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});