
$(function(){
	// 大轮播开始
	$('#owl-demo').owlCarousel({
		autoPlay: 3000,
		autoHeight: true,
		transitionStyle: 'fade',
		singleItem: true,
		navigation:true,
		scrollPerPage:true,
		navigationText:["上一张","下一张"]
	});

	$('#job .job_table td').mouseenter(function(){

		var index = $(this).attr("data-index");	

		$(".owl-carousel").owlCarousel();
		var owl = $(".owl-carousel").data('owlCarousel');
		owl.goTo(index);	
	});


	// $('#xiaoshou').click(function(){
	// 	$(".owl-carousel").owlCarousel();
	// 	var owl = $(".owl-carousel").data('owlCarousel');
	// 	owl.goTo(0);	
	// });

	

	// 大轮播 end
	

	// 回到顶部开始
	$('#goTop').click(function(){
		$('body,html').animate({ //body兼容chorme html兼容Firefox IE

			'scrollTop':0  //返回或设置匹配元素的滚动条的垂直位置可以设置数值
		});
	});

	$(window).on('scroll',function(){
		if($(window).scrollTop()>100) {
			$('#goTop').show();
		}
		else {
			$('#goTop').hide();	
		}
	});

	$('#two_code').hover(function(){
		$('#two_code img').finish().fadeToggle();
	})

	// 回到顶部 end
	


	// 滚动监听开始
	$('#turnTo_xiaoniu').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//关于小牛
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值

	$('#turnTo_news').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//新闻动态

    $('#turnTo_business').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//业务内容
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值

	$('#turnTo_superiroity').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//小牛优势
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值


	$('#turnTo_introduce').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//小牛团队
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值
	
	$('#turnTo_job').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//公司招聘
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值

	$('#turnTo_parent').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//合作伙伴
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值
	
	$('#turnTo_footer').click(function () {
	    $('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top  
	    }, 500);
	        return false;
    });	//联系我们
	//$($.attr(this,'href'))第一个this是返回属性值 第二个设置属性值
	
	// 滚动监听 end
	

	// 文字滑动 开始
	$(".b_content").hover(function(){
		$(this).find('h4').css({height:14})
	},function(){
		$(this).find('h4').css({height:20});
	})	

	// 文字滑动 end
	

	// 向下滑动效果开始
	 wow = new WOW(
        {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
        }
    )
    wow.init();
});
	
