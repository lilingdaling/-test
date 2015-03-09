
$(function(){
	//头部logo点击回到顶部
	$(".header-logo").click(function(){
				window.scroll(0,0);
		$(".header-list a").removeClass("change-a").addClass("a-style");
		$(".header-list li").removeClass("header-bg");
	});
	//底部语言切换
		$('.Language').click(function(){
			$(this).find('div').show();
		});
		$('.Language').mouseout(function(){
			$(this).find('div').hide();
		});
		$('.Language div').mouseover(function(){
			$(this).show();
		});
	//六个内容：自动采集，识别算法。。。
	$(".click-li").click(function(){
		var index = $(this).index();
		$(this).addClass("show-text").siblings().removeClass("show-text");
		$(".nav-active").eq(index).removeClass("nav-hide").siblings().addClass("nav-hide")
	});
	$(".click-li1").click(function(){
		$(this).addClass("show-text").siblings().removeClass("show-text");
		var index = $(this).index();
		$(".nav-active1").eq(index).removeClass("nav-hide").siblings().addClass("nav-hide")
	});
	$(".click-li2").click(function(){
		$(this).addClass("show-text").siblings().removeClass("show-text");
		var index = $(this).index();
		$(".nav-active2").eq(index).removeClass("nav-hide").siblings().addClass("nav-hide")
	});
	$(window).scroll(function(){
		var ban_height = $(".banner").height() - 120;
		var scroll_top = $(window).scrollTop();
		var length_ = $(".container").length;
		//头部颜色
		if(scroll_top >= ban_height){
			$("#logo").attr("src","images/navi_logoW.png");
			$(".header").css({"background":"#2c4b7e"});
			$(".header-list a").css("color","#aabfe2").attr("alt","1");
		}else{
			$("#logo").attr("src","images/navi_logo.png");
			$(".header").css({"background":"#fff"});
			$(".header-list a").css("color","#000").attr("alt","2");
		}
		//	导航条加载	
		for (var i = 0; i < length_; i++) {
			var id_ = $(".container").eq(i).prop("id");
			var this_offtop = document.getElementById(id_).offsetTop;
			var top_ = (document.getElementById(id_).offsetTop) - 120;
			if(document.getElementById("container-one").offsetTop - scroll_top > 120 && document.getElementById("container-one").offsetTop - scroll_top < $(".banner").height()){
				$(".header-list li").removeClass("header-bg").find('a').removeClass('change-a');

				}
			else if(this_offtop - scroll_top <= 120){
				$(".header-list li").eq(i).addClass("header-bg").siblings().removeClass("header-bg");
				$(".header-list a").removeClass("change-a").addClass("a-style");
				$(".header-list li").eq(i).find("a").removeClass("a-style").addClass("change-a");
			}
			else if(-10 < (this_offtop - scroll_top - 120 ) < 10){
				// alert(this_offtop - scroll_top)
				 // window.scroll(0,this_offtop - 121);
				 $(".container").eq(i).stop(true,true).animate({scrollTop:this_offtop - 121+"px"}, 1000);		 
			}
		}
	});

});

//头部logo点击回到顶部
	// function topup(){
	// 	window.scroll(0,0);
	// 	$("[alt='2']").removeClass("change-a");
	
	// }
	// 导航单击
	function li_click(index){
		var id_ = $(".container").eq(index).attr("id");
		var top_ = (document.getElementById(id_).offsetTop) - 120;
		$("html,body").stop(true,true).animate({scrollTop:top_+"px"}, 500);
		$(".header-list li").eq(index).addClass("header-bg").siblings().removeClass("header-bg");
		$(".header-list a").removeClass("change-a").addClass("a-style");
		$(".header-list li").eq(index).find("a").removeClass("a-style").addClass("change-a");
		
	}
