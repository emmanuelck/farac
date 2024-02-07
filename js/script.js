$(function () {
    $(window).scroll(function () {
        
        var top_offset = $(window).scrollTop();
        
        if (top_offset == 0) {
            $('.topbar').removeClass('show');
        } else {
            $('.topbar').addClass('show');
        }
    })
});