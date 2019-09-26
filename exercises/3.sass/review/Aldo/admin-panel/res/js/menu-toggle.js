$(document).ready(function(){
    var w;
    $(".menu-toggle").click(function(){
        w = $(window).width();
        if (w < 768) {
            $("body").toggleClass("menu-open");
        } else {
            $("body").toggleClass("collapse");
        } 
    });
});