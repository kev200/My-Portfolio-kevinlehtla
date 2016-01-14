$(document).ready(function() {

	$(window).scroll(function(event){

		var y = $(this).scrollTop();

		if (y >= 100) {

			$('#mina').addClass('animated fadeInLeft opacity1');
			$('.minustText').addClass('animated fadeInRight opacity1');
		}
	});
});


$(document).ready(function(){

	$('.posts:first-child').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function(){
		$(this).removeClass('animated fadeInLeft');
	});

	$('.posts:nth-child(2)').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function(){
		$(this).removeClass('animated fadeInRight');
	});

	// $('#mina').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
	// 	function(){
	// 	$(this).removeClass('animated fadeInLeft');
	// });

});

$(document).ready(function(){
	$('.fromleft').addClass('animated fadeInLeft');
	$('.fromright').addClass('animated fadeInLeft');
});