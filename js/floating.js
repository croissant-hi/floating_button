$(function() {
    var w = $(window),
        fTop = $('.floating'),
        offset = 100;

    w.on('scroll', scroll);

    function scroll(){
        var top = w.scrollTop();
        if(offset <= top){
            fTop.fadeIn('fast');
        }else{
            fTop.fadeOut('fast');
        }
    }
});
