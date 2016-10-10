(function($) {
    'use strict';
    $.fn.mlFlatMenus = function() {
        var self = this;

        function resizeFlatMenus() {
            self.each(function() {
                var menuRoot = $(this),
                    hiddenSiblingGroups = menuRoot.find('.ml-sibling-group:hidden');
                if (hiddenSiblingGroups.length === 0) {
                    menuRoot.find('.ml-sibling-group-root > ul').each(function() {
                        var rootContainer = $(this),
                            totalWidth = 0,
                            paddingLeft, paddingRight, borderWidth;
                        rootContainer.find('.ml-sibling-group').each(function() {
                            totalWidth += $(this).outerWidth();
                        });
                        paddingLeft = parseInt(rootContainer.css('padding-left').replace(/px/gi, ''));
                        paddingRight = parseInt(rootContainer.css('padding-right').replace(/px/gi, ''));
                        borderWidth = parseInt(rootContainer.css('border-left-width').replace(/px/gi, '')) * 3;
                        rootContainer.css('width', (totalWidth + paddingLeft + paddingRight + borderWidth) + 'px');
                    });
                }
            });
            repositionFlatMenus();
        }

        function repositionFlatMenus() {
            self.each(function() {
                var menuElement = $(this);
                menuElement.parents('#ml-navbar-collapse').each(function() {
                    var container = $(this),
                        containerPos = container.offset().left + container.width();
                    menuElement.find('> li > ul').each(function() {
                        var dropDownElement = $(this),
                            dropDownPos, newDropDownPos;
                        dropDownElement.css('margin-left', '');
                        dropDownPos = dropDownElement.offset().left + dropDownElement.outerWidth();
                        newDropDownPos = containerPos - dropDownPos;
                        if (newDropDownPos < 0) {
                            dropDownElement.css('margin-left', newDropDownPos + 'px');
                        }
                    });
                });
            });
        }

        function buildFlatMenus() {
            self.each(function() {
                var menuRoot = $(this);
                menuRoot.find('.ml-sibling-group').each(function() {
                    var siblingGroup = $(this),
                        parent = siblingGroup.parent('ul'),
                        siblingRoot = siblingGroup.parents('ul > li:first');
                    siblingRoot.addClass('ml-sibling-group-root');
                    parent.find('> li[data-sibling-group-id]').each(function() {
                        if ($(this).attr('data-sibling-group-id') === siblingGroup.attr('data-sibling-group-id') && !$(this).hasClass('ml-sibling-group')) {
                            var siblingGroupItems = siblingGroup.find('.ml-sibling-group-items');
                            if (siblingGroupItems.length === 0) {
                                siblingGroupItems = $('<ul class="ml-sibling-group-items" />').appendTo(siblingGroup);
                            }
                            siblingGroupItems.append($(this));
                        }
                    });
                    if (siblingGroup.find('.ml-sibling-group-items li.ml-category-nav-item:not(.exclude)').length == 0) {
                        siblingGroup.find('.ml-sibling-group-items .ml-category-nav-header-snippet').hide();
                        siblingGroup.addClass('ml-sibling-group-exclude');
                    }
                });
                menuRoot.find('.ml-category-nav-footer-snippet').each(function() {
                    var footer = $(this),
                        groupWrapper = footer.prev('li');
                    if (groupWrapper.hasClass('ml-sibling-group-root')) {
                        footer.addClass('ml-sibling-group-footer-snippet');
                        groupWrapper.find('ul:first').append(footer);
                    }
                });
            });
        }

        buildFlatMenus();
        resizeFlatMenus();

        $('body').on('mlMediaQueryChanged', function() {
            resizeFlatMenus();
        });
        return this;
    };
})(jQuery);
$('.ml-navbar-menu:first').mlFlatMenus();
$('.ml-navbar-menu > .ml-category-nav-item:last a').addClass('clearanceNav');