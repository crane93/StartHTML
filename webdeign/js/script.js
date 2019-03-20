$(function(){
			//$("#nav>ul>li").hover(function(){<!-- 이벤트 핸들러,-->
				$("#nav>ul>li").hover(function(){
					$(this).children(".depth2").stop().slideDown(200);
					$(this).addClass("on");
			}, function(){
				$(".depth2").stop().slideUp(200);
				$(this).removeClass("on");
			});//거짓은 콤마
		
	
	$('.bxslider').bxSlider({	//j쿼리 다운받은거임,
		mode: 'vertical',
		auto: true,
		captions: true,
		speed:500,
		slideWidth: 0			//화면에 꽉차게 보임
	});

});		//index에 있는 스크립트를 따로 js 파일로 만들음
