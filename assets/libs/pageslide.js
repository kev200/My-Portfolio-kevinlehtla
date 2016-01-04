$(function() {
    var boxLefts = [];
    $('.row').each(function(i, el) {
        boxLefts.push(this.offsetLeft);
    });
    $('.slidebtn').click(function(e) {
        var dir = false,
            targetLeft = -1;

        var target = e.target.className;
        if (target == 'next') {
            dir = 1;
        } else {
            dir = -1;
        }
        if (dir) {
            e.preventDefault();
            winLeft = window.scrollX;
            $.each(boxLefts, function(i, v) {
                if ((dir == 1 && winLeft < v && targetLeft < 0) || (dir == -1 && winLeft > v)) {
                    targetLeft = v;
                }
            });
            if (targetLeft >= 0) {
                $('html:not(:animated), body:not(:animated)').stop().animate({
                    scrollLeft: targetLeft
                }, 1000);
            }
        }
        return false;
    });
});