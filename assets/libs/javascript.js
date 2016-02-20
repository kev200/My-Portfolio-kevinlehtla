
$(document).ready(function(){

	$('.posts:first-child').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function(){
		$(this).removeClass('animated fadeInLeft');
	});

	$('.posts:nth-child(2)').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
		function(){
		$(this).removeClass('animated fadeInRight');
	});
});

// $(document).ready(function(){
// 	$('.fromleft').addClass('animated fadeInLeft');
// 	$('.fromright').addClass('animated fadeInLeft');
// });


$(document).ready(function() {

if ( $(window).width() > 760) {

	$(document).ready(function(){
		$('.fromleft').addClass('animated fadeInLeft');
		$('.fromright').addClass('animated fadeInLeft');
	});

  } 
  else 
  {
    	$('.fromleft').addClass('opacity1');
		$('.fromright').addClass('opacity1');
  }
});


$(document).ready(function() {

if ( $(window).width() > 760) {

	$(window).scroll(function(event){
    	var y = $(this).scrollTop();

 		if (y >= 100) {

 			$('#mina').addClass('animated fadeInLeft opacity1');
 			$('.minustText').addClass('animated fadeInRight opacity1');
		}
	});

  } 
  else 
  {
    	$('#mina').addClass('opacity1');
		$('.minustText').addClass('opacity1');
  }
});