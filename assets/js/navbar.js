if($(window).width() < 992){
    $('.opaque-navbar').addClass('opaque');
}

// Reference https://codepen.io/Webspicer/pen/QwvRzM?q=navbar&limit=all&type=type-pens
$(window).scroll(function() {
    if( ($(window).width()) < 992){
        $('.opaque-navbar').addClass('opaque');
    }
    else if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    }
    else{
        $('.opaque-navbar').removeClass('opaque');
    }
});