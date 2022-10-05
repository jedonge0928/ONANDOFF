$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

$(function(){
    $(".top>a").click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
});

