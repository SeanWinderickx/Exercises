$(document).ready(function(){
    $(".close-toggle").click(function(){
        $(this).parent().parent().parent().parent().toggleClass("close");
    });
});