$(function() {
    $(window).scroll(function() {
        $('.fadein').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

let scroll = new SmoothScroll('a[href*="#"]', {
  header: '#header',
  speed:2000,
});

$(window).on("scroll", function() {
  let windowHeight = $(window).height();
  if ($(this).scrollTop() > windowHeight) {
    $('.go-top').show();
  } else {
    $('.go-top').hide();
  }
});

$('.go-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

$(function(){
	var loader = $('.loader-wrap');
	$(window).on('load',function(){
		loader.fadeOut();
	});

	// setTimeout(function(){
	// 	loader.fadeOut();
	// },3000);
});
