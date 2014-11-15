$(window).load(function () {
	$(".loader").fadeOut(1000, function () {
		$("header, section").css('display', 'table');
		$("footer").show();
		//$("").fadeIn(1000);
		$.each($(".hex-group .hex").sort(function () {
			return Math.random() * 10 > 5 ? 1 : -1;
		}), function (index, element) {
			var opacity = parseInt($(element).css('opacity'));
			setTimeout(function () {
				var tid = setInterval(function () {
					opacity += 0.01;
					$(element).css('opacity', opacity);
					if (opacity > 1) clearInterval(tid);
				}, 10);
			}, index * 500);

		});

		$('header a').click(function () {
			console.log("test");
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 500);
			return false;
		});
	});
});
