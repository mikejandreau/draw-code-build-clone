
// ISOTOPE FILTERING
// external js: isotope.pkgd.js
var isotopeWrapper =  document.querySelector('.grid-row');
if ( isotopeWrapper != null ) {

  // // init Isotope
  // var iso = new Isotope( '.grid-row', {
  //   itemSelector: '.element-item',
  //   layoutMode: 'fitRows'
  // });
  
  var iso;

  imagesLoaded( isotopeWrapper, function() {
    // init Isotope after all images have loaded
    iso = new Isotope( isotopeWrapper, {
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
  });

  // bind filter button click
  var filtersElem = document.querySelector('.filter-buttons');
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



// CONTACT FORM
// If contact form is present, add action attribute and email
// Shortened from => if (typeof(contactForm) != 'undefined' && contactForm != null) 
var contactForm =  document.getElementById('contactform');
if ( contactForm != null ) {
    contactForm.setAttribute('action', '//formspree.io/' + 'northeastcreativedesign' + '@' + 'gmail' + '.' + 'com');
}



// SCROLLUP BUTTON
// Show scroll-to-top button after scrolling down 200px
window.onscroll = function () {
  if (window.pageYOffset >= 200) {
    document.getElementById('scroll-to-top').style.opacity = "1";
  } else {
    document.getElementById('scroll-to-top').style.opacity = "0";
  }
};



// GALLERY OPTIONS
// using API to set selector class and looping functionality 
var lightboxPrimary = GLightbox({
  selector: 'glightbox1',
  loopAtEnd: true,
  width: 800, // 960 or 900
  height: 450, // 540 or 506
  videosWidth: 800, // 720
  videosHeight: 450, // 405
});

// var lightboxSecondary = GLightbox({
//   selector: 'glightbox2',
//   loopAtEnd: true,
//   width: 800, // 960 or 900
//   height: 450, // 540 or 506
//   videosWidth: 800, // 720
//   videosHeight: 450, // 405
// });

// CLOSE GALLERY BY CLICKING OUTSIDE
// listen for click on current slide, then trigger close button click
document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'current')) {
    document.querySelector('.gclose').click();
  }
}, false);

// also listen for click on the inner content block
document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'gslide-inner-content')) {
    document.querySelector('.gclose').click();
  }
}, false);
