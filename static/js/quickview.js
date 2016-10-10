var quickview = {
	baseUrl: 'https://www.steinmart.com',
	modal: null,

	closeModal: function() {
		this.modal.removeClass('in');
		this.modal.attr('aria-hidden', 'true');
		this.modal.hide();

		$('.modal-backdrop').fadeOut(400, function() {
			
		});

		$(document.body).removeClass('modal-open');
		
	},

	openModal: function(data) {
		$(document.body).addClass('modal-open');
		var modal = $('#qveModal');
		this.modal = modal;
		modal.find('.modal-content').html($.parseHTML(data));
		modal.show();
		modal.addClass('in');
		modal.attr('aria-hidden', 'false');

		quickview.initTabs();

		$('.ml-modal-close').click(function() {
			quickview.closeModal();
		});

		$('.modal-backdrop').click(function() {
			window.alert('closing');
			quickview.closeModal();
		});

		$('#zoom1').attr('target', '_self');
    	CloudZoom.quickStart();
	},

	initTabs: function() {
		var navTabs = $('.nav-tabs');
		var descriptionToggle = navTabs.find('.description');
		var overviewToggle = navTabs.find('.productOverview');

		descriptionToggle.removeAttr('href');
		overviewToggle.removeAttr('href');

		var descriptionTab = $('#tab_topic_description');
		var overviewTab = $('#productOverview');

		descriptionToggle.click(function() {
			$(this).parent().addClass('active');
			overviewToggle.parent().removeClass('active');
			descriptionTab.addClass('active');
			overviewTab.removeClass('active');;
		});

		overviewToggle.click(function() {
			$(this).parent().addClass('active');
			descriptionToggle.parent().removeClass('active');
			overviewTab.addClass('active');
			descriptionTab.removeClass('active');
		});
	},

	initSwatches: function() {
		var mainImage = $('#mainimage');
	},

	initButtons: function() {
		$('.ml-product-qve-button').click(function() {
			$(document.body).append('<div class="modal-backdrop quickview-modal"></div>');
			$('.modal-backdrop').fadeIn(250);

			var dataRemote = $(this).find('button').attr('data-remote');
			var url = quickview.baseUrl + dataRemote;
			console.log(url);

			$.ajax({
				type: 'GET',
				url: url,
				success: function(data) {
					quickview.openModal(data);					
				},
				error: function(data) {
					console.log('Error getting quickview');
				}
			});
		});
	},

	init: function() {
		$('#ml-modal-placement').append($('.qveTarget').html());
        $('.qveTarget').remove();
		quickview.initButtons();
	},
}
quickview.init();
