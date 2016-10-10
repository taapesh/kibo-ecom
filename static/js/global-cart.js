'use strict';

var cart = {
	init: function() {
		var globalBasket = $('#globalBasket');
		var globalCartLayer = $('.globalCartLayer');

		globalBasket.mouseenter(function() {
			if ($(window).width() < 768) {
				return;
			}
			var element = $(this);
			globalCartLayer.stop();
			globalCartLayer.css('opacity', 1);

			var showTimer = setTimeout(function() {
				globalCartLayer.show();
    		}, 250);

    		element.data('showTimer', showTimer);
			clearTimeout($(this).data('timeoutId'));
		}).mouseleave(function() {
			clearTimeout($(this).data('showTimer'));

			var element = $(this),
			timeoutId = setTimeout(function() {
				globalCartLayer.fadeOut('fast');
			}, 1000);

			// Set the timeoutId, allowing us to clear this trigger if the mouse comes back over
			element.data('timeoutId', timeoutId); 
		});

		$(window).click(function() {
			globalCartLayer.fadeOut('fast');
		});

		globalCartLayer.click(function(event){
		    event.stopPropagation();
		});
	},
}
cart.init();