$(document).ready(function() {

	//Home page strip
	$('.left-strip').addClass('active').delay(2000);

	// About page strip
	if ($(".about-page").hasClass("active")) {
		$('.right-strip').addClass('active');
	}


	//Tabs
	$('.tab-content').hide();
	$('.tab-content:first-child').show();
	$('.tabs li:first-child').addClass('active');
	$('.tabs li').click(function(event) {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});

	//Hover choice page
	$('.choice-page-left').hover(
		function() {
			$( this ).addClass('active');
		}, function() {
			$( this ).removeClass('active');
		}
	);

	$('.choice-page-right').hover(
		function() {
			$( this ).addClass('active');
		}, function() {
			$( this ).removeClass('active');
		}
	);


	//About page strip
	// $(window).scroll(function() {
	//   var offset = $('.about-page').offset();
	//   if ($(this).scrollTop() > offset.top) {
	//     $('.right-strip').addClass('active');
	//   }
	// });


	//Fullpage
	$('#fullpage').fullpage({
		autoScrolling: true,
		verticalCentered: false
	});

});