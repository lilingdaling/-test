$(function(){

	$('.content .ico').each(function(){
		$(this).click(function(event){
			var index = $(this).index()
			$('.ico').removeClass('ico-one');
			$(this).addClass('ico-one');
			$('.content-list').eq(index).css({opacity: 0}).stop().animate({opacity:1},1000);
		});
	});

});