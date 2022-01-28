(function () {
	var all = $('*');

	setInterval(function () {
		var colorR = Math.floor(Math.random() * 255);
		var colorG = Math.floor(Math.random() * 255);
		var colorB = Math.floor(Math.random() * 255);
		
		$('body').css('backgroundColor', 'rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')');
	}, 150);

	setInterval(function () {
		all.each(function () {
			var $this = $(this);
		  
			var a = Math.random() * $(window).width() / 2;
			var b = Math.random() * $(window).height() / 2;
			var c = Math.random() * $(window).width();
			var d = Math.random() * $(window).height();
			var e = Math.random() * 1000;
			var f = Math.floor(Math.random() * 30) + 10;
			
			var r1 = Math.random();
			var r2 = Math.random();
			
			var colorR = Math.floor(Math.random() * 255);
			var colorG = Math.floor(Math.random() * 255);
			var colorB = Math.floor(Math.random() * 255);
			
			var css = {
				position: 'fixed',
				width: a + 'px',
				height: b + 'px',
				zIndex: e,
				fontSize: f,
				color: 'rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')',
			};
			
			if (r1 > 0.5) {
				css.top = c + 'px';
			}
			else {
				css.bottom = c + 'px';
			}
			
			if (r2 > 0.5) {
				css.left = c + 'px';
			}
			else {
				css.right = c + 'px';
			}

			$this.css(css);
		});
	}, 500);
})();