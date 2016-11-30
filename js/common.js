$(function() {
    $('a[href^=#]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    $('#va-accordion').vaccordion({
        visibleSlices: 4,
        expandedHeight: 600,
        animSpeed: 500,
        animEasing: 'easeInOutBack',
        animOpacity: 0.4
    });

    var topBtn = $('#pageTop');
    topBtn.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#js-gallery').photoSwipe('img',
        {allowUserZoom: false}
    );
});
