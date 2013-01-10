(function () {
	var grid = $(".gridster > ul").gridster({
	    widget_margins: [10, 10],
	    widget_base_dimensions: [140, 140],
	    min_cols: 6,
	    extra_cols: 0
	}).data('gridster');

	var add_block = function () {
		size_x = Math.floor(Math.random() * 2, 0) + 1;
		size_y = Math.floor(Math.random() * 2, 0) + 1;

		grid.add_widget('<li></li>', size_x, size_y);
	};

	$('#add').click(function () {
		var count = 5;
		while (--count) {
			add_block();
		}
		$('body').animate({scrollTop: document.body.scrollHeight}, 'slow');
	});
}())

