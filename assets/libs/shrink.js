/* SHRINK MENU WHEN SCROLL */ 

$(window).on("scroll touchmove", function () {
	if($(document).scrollTop() > 0){
		$('#page-wrapper').addClass('shrink');
		$('.to-top').fadeIn(300);
	}else{
		$('#page-wrapper').removeClass('shrink');
		$('.to-top').fadeOut(300);
	}
});


/* TO TOP */

$('.to-top').on('click', function(){
	$('#page-wrapper').animate({ scrollTop: 0 }, 'fast');
})