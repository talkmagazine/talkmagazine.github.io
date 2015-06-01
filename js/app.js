/* globals $:false */

$(function () {
	var app = {
		init: function () {

			this._initCountdown();
			this._initTwitterAPI();
			this._initInstagramAPI();

		},

		_initCountdown: function() {
			
			// set the date we're counting down to
			var targetDate = new Date("June 4, 2015 15:00:00").getTime();

			// variables for time units
			var days, hours, minutes, seconds;

			// get tag element
			var $countdown = $('.countdown');

			// update the tag with id "countdown" every 1 second
			setInterval(function () {

				// find the amount of "seconds" between now and target
				var current_date = new Date().getTime();
				var seconds_left = (targetDate - current_date) / 1000;
		
				// do some time calculations
				days = parseInt(seconds_left / 86400);
				seconds_left = seconds_left % 86400;
		
				hours = parseInt(seconds_left / 3600);
				seconds_left = seconds_left % 3600;
		
				minutes = parseInt(seconds_left / 60);
				seconds = parseInt(seconds_left % 60);
		
				// format countdown string + set tag value
				$countdown.html(days + ' days and ' + hours + ' hours and<br>' + minutes + ' minutes and ' + seconds + ' seconds' );
				
			}, 0);

		},

		_initTwitterAPI: function () {

		},

		_initInstagramAPI: function(){

		}
	};

	app.init();
});