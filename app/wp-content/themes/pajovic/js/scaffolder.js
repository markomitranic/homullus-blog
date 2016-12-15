// This document is used for executing certain
// functions only on certain window sizes.

var Scaffolder = {
	articles: $('#posts article'),
	tablet: 980,
	mobile: 420,
	calc: function() {
		if (WindowFrame.width() > this.tablet) {
			this.setDesktop();
		} else if (WindowFrame.width() <= this.tablet && WindowFrame.width() > this.mobile) {
			this.setTablet();
		} else if (WindowFrame.width() <= this.mobile) {
			this.setMobile();
		}
	},
	setDesktop: function() {
		if($("#landingHero").length) {landingHeroInit();}
	},
	setTablet: function() {

	},
	setMobile: function() {
		mobileMenu.init(); //Calc max width of menu items and resize the mobile menu
		mobileMenu.positionCenter(); //Scroll the menu to make the active item central in view
	},
}




// We cache the window frame object for a bit of speed.
var WindowFrame = $(window);


// Also, we need to add a listener for resize,
//which will call the Scaffolder function
//each time window is resized
WindowFrame.on('resize load', function() {
	Scaffolder.calc();
});


//Add animated scroll to the Back To Top arrow.
$('#upArrow').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, "fast");
});