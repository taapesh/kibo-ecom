var directoryView = {

    init: function() {
        this.listViewToggle = $('#listView');
        this.gridViewToggle = $('#gridView');
        this.gridViewItems = $('#ml-grid-view-items');

        var viewMode = sessionStorage.getItem('viewMode');

        if (viewMode === 'list') {
            this.listViewToggle.addClass('active');
            directoryView.showListView();
        } else {
            this.gridViewToggle.addClass('active');
            directoryView.showGridView();
        }

        this.listViewToggle.click(function() {
            directoryView.showListView();
            sessionStorage.setItem('viewMode', 'list');
        });

        this.gridViewToggle.click(function() {
            directoryView.showGridView();
            sessionStorage.setItem('viewMode', 'grid');
        });
    },

    showListView: function() {
        this.gridViewItems.removeClass('ml-grid-view-multi-column').addClass('ml-grid-view-single-column');
        this.listViewToggle.addClass('active');
        this.gridViewToggle.removeClass('active');
    },

    showGridView: function() {
        this.gridViewItems.removeClass('ml-grid-view-single-column').addClass('ml-grid-view-multi-column');
        this.gridViewToggle.addClass('active');
        this.listViewToggle.removeClass('active');
    },
};
directoryView.init();

