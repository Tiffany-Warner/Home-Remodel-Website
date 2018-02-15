$(".gallery-thumbnail figure").hover(function(){
    //mouse enter handler
        $(this).find("img").css("opacity", "0.5");
        console.log($(this));
        $(this).find("figcaption").removeClass("hide");
    },
    //mouse out handler
    function() {
        $(this).find("img").css("opacity", "1");
        $(this).find("figcaption").addClass("hide");
    }
);