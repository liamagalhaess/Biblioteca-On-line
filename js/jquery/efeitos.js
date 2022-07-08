//esconder

$(document).ready(function(){
  $('.l1').hide();
 });

(function ($) {
  "use strict";

  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });



})(jQuery);

//To show price

$(document).ready(function(){
  $('#img1').mouseover(function(){
    $('.teste').hide();
    $('.l1').show();

  });
  $('#img1').mouseout(function(){
    $('.l1').hide();
    $('.teste').show();
  });
});

  // Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, '3000');
    return false;
  });

	var nav = $('nav');
	var navHeight = nav.outerHeight();


//Go to Footer and to Buy
$(document).ready(function($) {
		$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1100);
   });
});

$(document).ready(function($) {
	$(".dropdown-item").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1100);
   });
});
