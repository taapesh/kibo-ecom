var swatches = {
	init: function() {
		$('.ml-thumb-image a img').each(function() {
			$(this).attr('data-src', this.src);
		});

		$('.ml-thumb-max-swatch').mouseenter(function() {
			$(this).closest('.ml-grid-view-item').find('.ml-thumb-image a img').attr('src', this.href);
		}).mouseout(function() {
			var mainImage = $(this).closest('.ml-grid-view-item').find('.ml-thumb-image a img');
			mainImage.attr('src', mainImage.attr('data-src'));
		});

		$('.ml-thumb-max-swatch').click(function(event) {
			event.preventDefault();
			var mainImage = $(this).closest('.ml-grid-view-item').find('.ml-thumb-image a img');
			mainImage.attr('data-src', this.href);

			var selected = $(this).closest('.ml-thumb-swatches').find('.ml-thumb-max-swatch .ml-thumb-swatch-selected');
			selected.addClass('ml-thumb-swatch-unselected');
			selected.removeClass('ml-thumb-swatch-selected');

			var swatch = $(this).find('img');
			swatch.addClass('ml-thumb-swatch-selected');
			swatch.removeClass('ml-thumb-swatch-unselected');
			return false;
		});
	},
}
swatches.init();

