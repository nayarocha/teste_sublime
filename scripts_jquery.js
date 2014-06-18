// JavaScript Document
   
   	/* Script que gera efeito em menu dropdown / http://api.jquery.com/slidetoggle/*/
    $(document).ready(function(){
    $("#menu li a").mouseover(function(){
    var index = $("#menu li a").index(this);
    $("#menu li").eq(index).children("ul").slideDown();
    if($(this).siblings('ul').size() > 0){
    return false;
    }
    });
    $("#menu li").mouseleave(function(){
    var index = $("#menu li").index(this);
    $("#menu li").eq(index).children("ul").slideUp();
    });
    });
	
	
	 $(document).ready(function(){
	    	
		    $(".centraliza li a").mouseover(function(){
		    var index = $(".centraliza li a").index(this);
		    $(".centraliza li").eq(index).children("ol").slideDown();
		    
		    if($(this).siblings('ol').size() > 0){
		    	return false;
		    }
		    });
		    
		    $(".centraliza li").mouseleave(function(){
		    var index = $(".centraliza li").index(this);
		    $(".centraliza li").eq(index).children("ol").slideUp();
		    });
	    });
    </script>