//––––––––––––––––––––––––––––––––––––––––––––––––––
// MOBILE NAVIGATION
// Plain JavaScript functions to toggle the mobile navigation, no jQuery required
// Uses class-helpers.js to enable jQuery-like controls over class manipulation
// WAI-ARIA values are also added for accessibility 
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Variables
var menuToggle = document.querySelector('.menu-toggle');
    menuDismiss = document.querySelector('.menu-dismiss');
    outsideMenu = document.querySelector('.site-content');
    menuContainer = document.querySelector('.main-navigation');
    navMenu = document.querySelector('.nav-menu');
    
// Aet WAI-ARIA values for nav and toggle button
menuToggle.setAttribute( 'aria-expanded', 'false' );
navMenu.setAttribute( 'aria-expanded', 'false' );

// Toggle main menu and set WAI-ARIA values when menu button is clicked
menuToggle.onclick = function() {
  if (hasClass(menuContainer, 'is-open')) {
    removeClass(menuDismiss, 'is-active');
    removeClass(menuContainer, 'is-open');
    menuToggle.setAttribute( 'aria-expanded', 'false' );
    navMenu.setAttribute( 'aria-expanded', 'false' );
  } else {
    addClass(menuDismiss, 'is-active');
    addClass(menuContainer, 'is-open');
    menuToggle.setAttribute( 'aria-expanded', 'true' );
    navMenu.setAttribute( 'aria-expanded', 'true' );
  }
};

// Close menu and reset WAI-ARIA values when 'X' is clicked
menuDismiss.onclick = function() {
  removeClass(menuDismiss, 'is-active');
  removeClass(menuContainer, 'is-open');
  menuToggle.setAttribute( 'aria-expanded', 'false' );
  navMenu.setAttribute( 'aria-expanded', 'false' );
};

// Close menu and reset WAI-ARIA values when area outside of menu is clicked
outsideMenu.onclick = function() {
  removeClass(menuDismiss, 'is-active');
  removeClass(menuContainer, 'is-open');
  menuToggle.setAttribute( 'aria-expanded', 'false' );
  navMenu.setAttribute( 'aria-expanded', 'false' );
};

// Reset mobile nav for tablet and larger (800px is tablet breakpoint)
window.addEventListener('resize', disableMobileNav);
function disableMobileNav() {
  if (window.innerWidth > 799) {
    removeClass(menuDismiss, 'is-active');
    removeClass(menuContainer, 'is-open');
    menuToggle.setAttribute( 'aria-expanded', 'false' );
    navMenu.setAttribute( 'aria-expanded', 'true' );
  } else {
    navMenu.setAttribute( 'aria-expanded', 'false' );
  }
}
