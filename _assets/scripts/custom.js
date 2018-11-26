// main.js



// // toggle the mobile menu button open and closed states
// var removeClass = true;
// $(".navbar-toggler").click(function () {
// 	$(".navbar-toggler").toggleClass('is-active');
// 	removeClass = false;
// });

// // ignore clicking the navbar
// $(".navbar").click(function() {
// 	removeClass = false;
// });

// // close nav if page is clicked
// $("html").click(function () {
// 	if (removeClass) {
// 		$(".navbar-toggler").removeClass('is-active');
// 		$('.collapse').collapse('hide');  
// 	}
// 	removeClass = true;
// });

// // close nav if link is clicked
// $(".navbar a").click(function () {
// 	if (removeClass) {
// 		$(".navbar-toggler").removeClass('is-active');
// 		$('.collapse').collapse('hide');  
// 	}
// 	removeClass = true;
// });

// // disable mobile nav for laptop and desktop
// $(window).resize(function() {
// 	if( $(this).width() > 767 ) {
// 		$(".navbar-toggler").removeClass('is-active');
// 		$('.collapse').collapse('hide');  
// 	}
// });

// // show scrollup button after scrolling 300px
// scrollToTopButton = document.getElementById("scrollUpButton");
// var showScrollToTop = function () {
// 	var y = window.scrollY;
// 	if (y >= 300) {
// 		scrollToTopButton.className = "scrollup show";
// 	} else {
// 		scrollToTopButton.className = "scrollup";
// 	}
// };
// window.addEventListener("scroll", showScrollToTop);





// // append caption to figure in fancybox gallery
// $('[data-fancybox="images"]').fancybox({

// 	// Enable infinite gallery navigation
// 	loop: false,

// 	// display counter at the top left corner
// 	infobar: false,

// 	// buttons to appear in the top right corner in toolbar (class="fancybox-toolbar"` element)
// 	buttons: [
// 		// "zoom",
// 		//"share",
// 		// "slideShow",
// 		//"fullScreen",
// 		//"download",
// 		// "thumbs",
// 		"close"
// 	],
// 	caption : function(instance,item) {
// 		return $(this).closest('figure').find('figcaption').html();
// 	}
// });





// // jquery easing
// (function($) {
//   "use strict"; // Start of use strict

//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 54)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });

//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 54
//   });

// })(jQuery); // End of use strict







// Make sure scripts rendered
$(document).ready(function (){
	console.log('document is ready, aww yeah');
});






