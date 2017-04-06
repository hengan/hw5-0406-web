$(function(){  
    $("nav ul li").hover(
    	function(){  
             $(this).css("background","rgba(255,255,255,0.2)");
            $(this).children("ul").slideDown(200);  

        },function(){  
         $(this).css("background","none");
         $(this).children("ul").slideUp(200);  

    });  
}); 