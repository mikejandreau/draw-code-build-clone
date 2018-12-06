// main.js


// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}




// Toggle search icon and content
var searchToggle = document.querySelector('.search-toggle');
    myInitialContent = document.querySelector('.initial-content');
    mySearchContent = document.querySelector('.search-content');

searchToggle.onclick = function() {
  toggleClass(mySearchContent, 'is--visible');
  // toggleClass(myInitialContent, 'is--hidden');
};



// // close search if page is clicked
// $("html").click(function () {
//   if (removeClass) {
//     $(".search-content").removeClass('is--visible');
//   }
//   removeClass = true;
// });



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

















// toggle the mobile menu button open and closed states
var removeClass = true;
$(".navbar-toggler").click(function () {
  $(".navbar-toggler").toggleClass('is-active');
  removeClass = false;
});

// ignore clicking the navbar
$(".navbar").click(function() {
  removeClass = false;
});

// close nav if page is clicked
$("html").click(function () {
  if (removeClass) {
    $(".navbar-toggler").removeClass('is-active');
    $('.collapse').collapse('hide');  
  }
  removeClass = true;
});

// close nav if link is clicked
$(".navbar a").click(function () {
  if (removeClass) {
    $(".navbar-toggler").removeClass('is-active');
    $('.collapse').collapse('hide');  
  }
  removeClass = true;
});

// disable mobile nav for laptop and desktop
$(window).resize(function() {
  if( $(this).width() > 767 ) {
    $(".navbar-toggler").removeClass('is-active');
    $('.collapse').collapse('hide');  
  }
});









// show scrollup button after scrolling 300px
scrollToTopButton = document.getElementById("scrollUpButton");
var showScrollToTop = function () {
  var y = window.scrollY;
  if (y >= 300) {
    scrollToTopButton.className = "scrollup show"
  } else {
    scrollToTopButton.className = "scrollup"
  }
};
window.addEventListener("scroll", showScrollToTop);









// jquery easing
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 54
  // });





// CONTACT FORM
// If contact form is present, add action attribute and email
// Shortened from => if (typeof(contactForm) != 'undefined' && contactForm != null) 
var contactForm =  document.getElementById('contactform');
if ( contactForm != null ) {

    contactForm.setAttribute('action', '//formspree.io/' + 'northeastcreativedesign' + '@' + 'gmail' + '.' + 'com');

}





// Init fancyBox
$().fancybox({
  selector : '.preview-item:visible > .preview-item-container > a',
  margin: 0,
  infobar: false,
  buttons: [
    "zoom",
    //"share",
    // "slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
  ],
  animationEffect : "fade",
  idleTime : false
})

// // Init Isotope
// var $grid = $('.grid').isotope({
//   // options
// });

// // Filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   $grid.isotope({ filter: $(this).attr('data-filter') });
// });








// ISOTOPE FILTERING
// external js: isotope.pkgd.js
var isotopeWrapper =  document.querySelector('.grid');
if ( isotopeWrapper != null ) {

  // // init Isotope
  // var iso = new Isotope( '.grid-row', {
  //   itemSelector: '.preview-item',
  //   layoutMode: 'fitRows'
  // });
  
  var iso;

  imagesLoaded( isotopeWrapper, function() {
    // init Isotope after all images have loaded
    iso = new Isotope( isotopeWrapper, {
      itemSelector: '.preview-item',
      layoutMode: 'fitRows'
    });
  });

  // bind filter button click
  var filtersElem = document.querySelector('.filter-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    // filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }
}






})(jQuery); // End of use strict










// Make sure scripts rendered
$(document).ready(function (){
	console.log('document is ready, aww yeah');
});






