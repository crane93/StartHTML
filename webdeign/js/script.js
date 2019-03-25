$(function() {
				
	//  $("#nav>ul>li").hover(function() {
	//	  $(this).children(".depth2").slideDown(200);
	//  }, function() {
	//	$(".depth2").slideUp(200);
	//  });
	$("#nav>ul>li").mouseenter(function() {
			$(this).children(".depth2").stop().slideDown(200);
			$(this).addClass("on");
		})
	$("#nav>ul>li").mouseleave(function() {
		$(this).children(".depth2").stop().slideUp(200);
		$(this).removeClass("on");
		});
		
		

	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		captions: true,
		speed:500,
		slideWidth:0
	});
	
		
}); //end






