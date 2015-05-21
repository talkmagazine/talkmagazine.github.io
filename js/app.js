/* globals $:false */

$(function () {
	var app = {
		init: function () {

			var el = document.getElementById('c');
			var ctx = el.getContext('2d');
			var isDrawing;

			el.width = window.innerWidth;
			el.height = window.innerHeight;

			document.onmousemove = function(e) {
			  isDrawing = true;
			  ctx.lineWidth = 50;
			  ctx.lineJoin = ctx.lineCap = 'round';
			  // ctx.strokeStyle = 'rgb(255,255,255)';
			  ctx.shadowBlur = 10;
			  ctx.shadowColor = 'rgb(255, 255, 255)';
			  ctx.moveTo(e.clientX, e.clientY);
			};
			el.onmousemove = function(e) {
			  if (isDrawing) {
			    ctx.lineTo(e.clientX, e.clientY);
			    ctx.stroke();
			  }
			};
			// el.onmouseup = function() {
			//   isDrawing = false;
			// };

		}
	};

	app.init();
});