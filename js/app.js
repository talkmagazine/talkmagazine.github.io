/* globals $:false */

$(function () {
	var app = {
		init: function () {

			this._initFadeIn();
			this._initScroll();

		},

		_initFadeIn: function () {
			$(window).load(function() {
				$('body').addClass('loaded');
			});
		},

		_initScroll: function () {
			
			// Divide height of the window by parameter

			function heightDivide(division) {
				return parseInt($(window).height() / division);
			}

			function scrollBand() {

				var scrollTop = $(document).scrollTop();
				var height = heightDivide(1)
				
				if (scrollTop > height) {
					$('.scroll-band').addClass('scroll-band-loaded');
				} else if (scrollTop < height ) {
					$('.scroll-band').removeClass('scroll-band-loaded');
				}
			} 
			
			$(window).scroll($.throttle( 150, true, function() {
				scrollBand();
			}));

			$(window).resize($.throttle(250, true, function(){
				scrollBand();
			}));
		}
	};

	app.init();
});