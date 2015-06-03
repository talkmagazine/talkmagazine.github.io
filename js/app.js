/* globals $:false */

$(function () {
	var app = {
		init: function () {

			this._initFadeIn();
			this._initTwitterAPI();
			this._initInstagramAPI();

		},

		_initFadeIn: function () {
			$(window).load(function() {
				$('body').addClass('loaded');
			});
		},

		_initTwitterAPI: function () {

		},

		_initInstagramAPI: function(){

		}
	};

	app.init();
});