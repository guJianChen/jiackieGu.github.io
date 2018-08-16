$(function () {
    banner();

    $('.carousel').carousel({
        interval: 3000
    })
    function banner() {
        var startX = 0;
        var distanceX = 0;
        var moveX = 0;
        $('.wjs-banner').on('touchstart',function(e) {
            $('.carousel').carousel('pause');
            startX = e.originalEvent.targetTouches[0].clientX;
            console.log(startX);
            
        })
        $('.wjs-banner').on('touchmove',function (e) {
            moveX = e.originalEvent.targetTouches[0].clientX;
            distanceX = moveX - startX;
        })

        $('.wjs-banner').on('touchend',function (e) {
            if(distanceX > 0) {
                $('.carousel').carousel('prev');
            }

            if(distanceX < 0) {
                $('.carousel').carousel('next');

            }
            $('.carousel').carousel('cycle');

            startX = 0;
            distanceX = 0;
            moveX = 0;

        })

    }

    function setWidth() {
        var width = 0;
        $('.wjs-product .nav-out li').each(function(i,v) {
            width += $(this).outerWidth();
            // console.log(width);
        })
        $('.wjs-product .nav-out ul').width(width);
    }
    setWidth();
})