$(document).ready(function(){
    $(".tabs > a").click(function(){
        
        $(".activity").removeClass("active");
        $(".activity-content").css("z-index", "1");
        
        $(".layout").removeClass("active");
        $(".layout-content").css("z-index", "1");
        
        $(".settings").removeClass("active");
        $(".settings-content").css("z-index", "1");
        
        $(this).addClass("active");
    });
    
    $(".layout").click(function(){
        $(".layout-content").css("z-index", "2");
    });
    
    $(".activity").click(function(){
        $(".activity-content").css("z-index", "2");
    });
    
    $(".settings").click(function(){
        $(".settings-content").css("z-index", "2");
    });
    
    
});