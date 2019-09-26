$(document).ready(function(){
    $(".minimize-toggle").click(function(){
        $(this).parent().parent().parent().parent().children(".content").toggleClass("minimize");
    });
});