/*global $: false, document: false, console: false */
/*jslint plusplus: true */
(function () {
    "use strict";
	var grid = $(".gridster > ul").gridster({
	    widget_margins: [10, 10],
	    widget_base_dimensions: [140, 140],
	    min_cols: 6
    }).data('gridster'),

        add_block = function () {
            var size_x = Math.floor(Math.random() * 2, 0) + 1,
                size_y = Math.floor(Math.random() * 2, 0) + 1;

            grid.add_widget('<li></li>', size_x, size_y);
        };

	$('#add').click(function () {
		var count = 5;
		while (--count) {
			add_block();
		}
		$('body').stop().animate({scrollTop: document.body.scrollHeight}, 'slow');
	});

    window.onunload = function () {
        console.log('leave');
    };
}());
