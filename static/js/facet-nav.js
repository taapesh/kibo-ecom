// function(a, b) {
//     "use strict";

//     function c(b) {
//         MarketLive.Base.setSessionStorageAttribute(a.lastFacetHeaderClassName, b.parents("li").attr("class"))
//     }
//     a.initialize = function() {
//         a.iFacetedNavTimer = null, a.bDebugFacetedNav = !1, a.debugFacetedNav("initializing FacetedNav"), a.aSingleSelectors = [".singleSelectFacet"], a.aMultiSelectors = [".multiSelectFacet"], a.sAllSelectors = a.aSingleSelectors.concat(a.aMultiSelectors).join(", "), a.sFacetedNavCookie = "facetedNav", a.sScreenYposCookie = "yScreenPos", a.sExpandedFacetsCookie = "expandedFacets", a.dumpPropertiesForDebug(), a.oPreviousSelectedFacets = a.getSelectedFacets(), a.facetedNavMqTest = b("#facetedNavMqTest"), a.lastFacetHeaderClassName = "lastFacetHeaderClass";
//         var d = b("#bodyFacetedNavPlaceholder"),
//             e = b("#facetedNavContainer"),
//             f = e.find(".ml-facet-expand-target");

        // a.isExtraSmall() && d.length > 0 && d.append(e), b(window).resize(function() {
        //     var c = !1;
        //     a.isExtraSmall() ? "bodyFacetedNavPlaceholder" !== e.parent().attr("id") && (d.length > 0 && d.append(e), e.hasClass("ml-nav-facet-expanded") && (c = !0)) : ("leftNavContainer" !== e.parent().attr("id") && (f.each(function() {
        //         b(this).removeAttr("style")
        //     }), b("#leftNavContainer").append(e)), e.hasClass("ml-nav-facet-expanded") || (c = !0)), c && e.find(".ml-nav-facet-expand-all-toggle").click()
        // }),

//         b(".ml-navleftbg").addClass("ml-faceted-nav-left-bg");
//         var g = b(".ml-faceted-nav-left-control");
//         g.expandCollapseList({
//             moreLink: a.sMoreLink,
//             lessLink: a.sLessLink,
//             showLessLink: a.bShowLessLink,
//             expanded: "all",
//             maxChildren: a.sMaxChildren
//         }), a.checkFacetedNavCookie(), b(a.aSingleSelectors.join(", ")).each(function() {
//             var d = b(this),
//                 e = d.hasClass("ml-facet-toggle-selection");
//             b(this).parents("li").find(".ml-clear").toggleClass("ml-disabled", 0 === b(this).find(".ml-selected").length), e && b(this).parents("li").find(".ml-toggle-selection").toggleClass("ml-disabled", 0 === b(this).find(".ml-selected").length), b(this).find(".ml-facet-value").not(".ml-disabled").each(function() {
//                 var f, g, d = b(this).hasClass("image") ? "image" : "text";
//                 b(this).parents("li").find(".ml-clear").click(function() {
//                     var e, f, c = b(this).parents("li").find(".ml-facet-value.ml-selected").not(".ml-disabled");
//                     c.each(function() {
//                         a.bDebugFacetedNav && (e = b(this).parent().attr("data-facet"), f = b(this).attr("data-facet-value"), a.debugFacetedNav("Clearing -> sFacet: " + e + ", sFacetValue: " + f)), b(this).removeClass("ml-selected"), "image" === d && b(this).find("img").each(function() {
//                             var c = b(this).attr("src"),
//                                 d = c.replace(a.sOnSuffix, a.sOffSuffix);
//                             b(this).attr("src", d)
//                         })
//                     }), c.length > 0 && (b(this).addClass("ml-disabled"), MarketLive.Events ? (MarketLive.Events.facetClearClicked.trigger({}), a.facetedNavTimer(0)) : a.facetedNavTimer(0))
//                 });
//                 var h = b(this).parents("li").find(".ml-clear");
//                 b(this).click(function() {
//                     if (a.bDebugFacetedNav && (f = b(this).parent().attr("data-facet"), g = b(this).attr("data-facet-value"), a.debugFacetedNav("Single Select -> sFacet: " + f + ", sFacetValue: " + g)), e) {
//                         var d = b(this).parents("li").find(".ml-toggle-selection");
//                         b(this).hasClass("ml-selected") ? (b(this).parent().find(".ml-facet-value.ml-selected").removeClass("ml-selected"), d.addClass("ml-disabled")) : (b(this).addClass("ml-selected"), d.removeClass("ml-disabled"))
//                     } else b(this).parent().find(".ml-facet-value.ml-selected").removeClass("ml-selected"), b(this).addClass("ml-selected"), h.removeClass("ml-disabled");
//                     if (c(b(this)), MarketLive.Events) {
//                         var i = b(this).parent().attr("data-facet-label"),
//                             j = b("#facetsArea").attr("data-facets-area");
//                         MarketLive.Events.facetValueClicked.trigger({
//                             facetArea: j,
//                             facetCategory: i,
//                             searchTerm: MarketLive.P2P.searchTerm
//                         }), a.facetedNavTimer(0)
//                     } else a.facetedNavTimer(0)
//                 }), "image" === d ? b(this).hover(function() {
//                     b(this).find("img[data-toggle-image]").each(function() {
//                         var a = b(this).attr("src");
//                         b(this).attr("src", b(this).attr("data-toggle-image")), b(this).attr("data-toggle-image", a)
//                     })
//                 }) : b(this).hover(function() {
//                     b(this).toggleClass("ml-hover")
//                 })
//             })
//         }), b(a.aMultiSelectors.join(", ")).each(function() {
//             var d = b(this).hasClass("ml-image-grid-filter") || b(this).hasClass("ml-image-list-filter") ? "image" : "text";
//             b(this).parents("li:first").mouseleave(function() {
//                 null != a.iFacetedNavTimer && (a.debugFacetedNav("Mouse leave event triggering action."), a.facetedNavTimer(0))
//             }), b(this).parents("li").find(".ml-clear").click(function() {
//                 var c = b(this).parents("li").find(".ml-facet-value.ml-selected").not(".ml-disabled");
//                 c.each(function() {
//                     a.clearFacet(b(this), d)
//                 }), c.length > 0 && (b(this).addClass("ml-disabled"), MarketLive.Events ? (MarketLive.Events.facetClearClicked.trigger({}), a.facetedNavTimer(0)) : a.facetedNavTimer(0))
//             }), b(this).find(".ml-facet-value").not(".ml-disabled").each(function() {
//                 b(this).click(function() {
//                     var f, g, e = b(this).parent();
//                     if (a.bDebugFacetedNav && (f = e.attr("data-facet"), g = b(this).attr("data-facet-value"), a.debugFacetedNav("Click Event -> sFacet: " + f + ", sFacetValue: " + g)), b(this).toggleClass("ml-selected"), c(b(this)), "image" === d && b(this).find("img").each(function() {
//                             var c = b(this).attr("src"),
//                                 d = c.indexOf(a.sOnSuffix) === -1 ? c.replace(a.sOffSuffix, a.sOnSuffix) : c.replace(a.sOnSuffix, a.sOffSuffix);
//                             b(this).attr("src", d)
//                         }), e.parents("li").find(".ml-clear").toggleClass("ml-disabled", 0 === e.find(".ml-selected").length), MarketLive.Events) {
//                         var h = b(this).parent().attr("data-facet-label"),
//                             i = b("#facetsArea").attr("data-facets-area");
//                         MarketLive.Events.facetValueClicked.trigger({
//                             facetArea: i,
//                             facetCategory: h,
//                             searchTerm: MarketLive.P2P.searchTerm
//                         })
//                     }
//                     a.facetedNavTimer(a.iMultiSelectWaitTime)
//                 }), b(this).hover(function() {
//                     b(this).toggleClass("ml-hover")
//                 })
//             }), b(this).parents("li").find(".ml-clear").toggleClass("ml-disabled", 0 === b(this).find(".ml-selected").length)
//         })
//     },
    
//     a.facetedNavTimer = function(b) {
//         a.facetedNavApply(b)
//     },

//     a.facetedNavApply = function(b) {
//         a.debugFacetedNav("facetedNavTimer");
//         var c = b <= 0;
//         a.iFacetedNavTimer && (clearTimeout(a.iFacetedNavTimer), a.iFacetedNavTimer = null), c ? a.facetedNavAction() : a.iFacetedNavTimer = setTimeout(MarketLive.FacetedNav.facetedNavAction, b)
//     },

//     a.getSelectedFacets = function() {
//         a.debugFacetedNav("getSelectedFacets");
//         var c = {};
//         return b(a.sAllSelectors).find(".ml-selected").each(function() {
//             var d = b(this).parent().attr("data-facet"),
//                 e = b(this).attr("data-facet-value");
//             a.debugFacetedNav("Selected -> sFacet: " + d + ", sFacetValue: " + e), c[d] || (c[d] = []), c[d].push(e)
//         }), c
//     },

//     a.facetedNavAction = function() {
//         a.debugFacetedNav("facetedNavAction");
//         var e, b = a.getSelectedFacets(),
//             c = a.selectedFacetsToQueryString(b),
//             d = a.selectedFacetsToQueryString(a.oPreviousSelectedFacets);
//         c !== d && (a.setFacetedNavCookie(), a.oPreviousSelectedFacets = b, e = a.sNavAction, e += e.indexOf("?") !== -1 ? e.indexOf("&") !== -1 ? "" : "&" : "?", e += c, e += a.sNavActionSuffix, e = e.replace(/&&/g, "&"), a.debugFacetedNav("newHref: " + e), location.href = e)
//     },

//     a.selectedFacetsToQueryString = function(b) {
//         a.debugFacetedNav("selectedFacetsToQueryString");
//         var d, c = [];
//         for (d in b) b.hasOwnProperty(d) && null != b[d] && (c.push(d + "=" + b[d].join(a.sMultiSelectValueSeparator)), a.removeDupQueryParams(d));
//         return c.join("&")
//     },

//     a.removeDupQueryParams = function(b) {
//         a.debugFacetedNav("removeDupQueryParams");
//         var f, g, c = "[&|?]" + (b + "=") + "[\\w" + a.sHierarchyValueSeparator + "]*&?",
//             d = new RegExp(c, "g"),
//             e = a.sNavAction.match(d);
//         if (e) {
//             for (a.debugFacetedNav("updated url from:"), a.debugFacetedNav(a.sNavAction + " to: "), f = 0; f < e.length; f++) g = "?" === e[f].charAt(0) ? "?" : "&", a.sNavAction = a.sNavAction.replace(e[f], g);
//             a.debugFacetedNav(a.sNavAction)
//         }
//     },

//     a.setFacetedNavCookie = function(c) {
//         a.debugFacetedNav("setFacetedNavCookie");
//         var h, d = null != c,
//             e = [],
//             f = [],
//             g = "";
//         d ? (h = new Date, h.setTime(h.getTime() + -36e5), g = ";expires=" + h.toUTCString()) : (b(a.sAllSelectors).find(".ml-less").each(function() {
//             e.push(b(this).parent().attr("data-facet"))
//         }), f.push(a.sScreenYposCookie + "=" + b(window).scrollTop()), f.push(a.sExpandedFacetsCookie + "=" + e.join(",")), a.debugFacetedNav("Cookie data <- " + f.join("||"))), document.cookie = d ? a.sFacetedNavCookie + "=" + g : a.sFacetedNavCookie + "=" + f.join("||")
//     },

//     a.checkFacetedNavCookie = function() {
//         a.debugFacetedNav("checkFacetedNavCookie");
//         var c = "",
//             d = {};
//         b.each(document.cookie.split(";"), function(b, d) {
//             d.indexOf(a.sFacetedNavCookie + "=") !== -1 && (c = d.replace(a.sFacetedNavCookie + "=", ""))
//         }), c.length > 0 && (a.debugFacetedNav("Cookie data -> " + c), b.each(c.split("||"), function(a, c) {
//             var e = c.split("=");
//             d[b.trim(e[0])] = b.trim(e[1])
//         }), d[a.sExpandedFacetsCookie] && (a.debugFacetedNav("sExpandedFacetsCookie: " + d[a.sExpandedFacetsCookie]), b.each(d[a.sExpandedFacetsCookie].split(","), function(c, d) {
//             var e = "[data-facet=" + d + "]";
//             b(e).find(".ml-more").each(function() {
//                 b(this).html(a.sLessLink), b(this).parent().children("li").show(), b(this).removeClass("ml-more"), b(this).addClass("ml-less")
//             })
//         })), a.bRestoreScrollPosition && b(document).ready(function() {
//             b(window).scrollTop(d[a.sScreenYposCookie]), a.debugFacetedNav("scroll to: " + d[a.sScreenYposCookie])
//         }), a.setFacetedNavCookie("clearCookie"))
//     },

//     a.dumpPropertiesForDebug = function() {
//         if (a.bDebugFacetedNav) {
//             var c, b = "";
//             for (c in a) a.hasOwnProperty(c) && null != a[c] && "function" != typeof a[c] && (b += c + "=" + a[c] + "\n\t");
//             a.debugFacetedNav("Properties:\n\t" + b)
//         }
//     },

//     a.debugFacetedNav = function(b) {
//         a.bDebugFacetedNav === !0 && "undefined" != typeof console && console.log("FacetedNav: " + b)
//     },

//     a.isExtraSmall = function() {
//         return "none" === a.facetedNavMqTest.css("float")
//     },

//     a.getFacetBreakPoint = function() {
//         var a = null;
//         if (null != MarketLive.Globals.xsScreenWidth && (a = MarketLive.Globals.xsScreenWidth), null == a) return null;
//         var b = MarketLive.Globals.smScreenWidth;
//         return null != b && b > a ? b : (b = MarketLive.Globals.mdScreenWidth, null != b && b > a ? b : (b = MarketLive.Globals.lgScreenWidth, null != b && b > a ? b : null))
//     },

//     a.clearFacet = function(c, d) {
//         if (a.bDebugFacetedNav) {
//             var e = c.parent().attr("data-facet"),
//                 f = c.attr("data-facet-value");
//             a.debugFacetedNav("Clearing -> sFacet: " + e + ", sFacetValue: " + f)
//         }
//         c.removeClass("ml-selected"), "image" === d && c.find("img").each(function() {
//             var c = b(this).attr("src"),
//                 d = c.replace(a.sOnSuffix, a.sOffSuffix);
//             b(this).attr("src", d)
//         })
//     },

//     a.getSType = function(a) {
//         var b;
//         return b = a.hasClass("multiSelectFacet") ? a.hasClass("ml-image-grid-filter") || a.hasClass("ml-image-list-filter") ? "image" : "text" : a.hasClass("image") ? "image" : "text"
//     },

//     a.clearLastFacetHeaderClass = function() {
//         return MarketLive.Base.removeSessionStorageAttribute(a.lastFacetHeaderClassName)
//     }
// }(FacetedNav, jQuery);

'use strict';

var facetNav = {
    baseUrl: 'https://www.steinmart.com',
    categoryUrl: '/category/handbags-accessories/handbags-wallets/handbags.do',
    urlTail: 'pp=15',
    filters: {},
    facetNavState: {},

    // getFilterValueFromUrl: function(p) {
    //     // Get all query parameters from the request URL
    //     var query = window.location.search.substring(1);
    //     //var query = '?c=5.100405.100407&sale_flag=true&color=Black&price=Less+than+%2425.00|%2425.00+-+%2450.00&pp=99&sortby=ourPicksAscend&cx=0';
    //     var vars = query.split("&");

    //     for (var i = 0; i < vars.length; i++) {
    //         var pair = vars[i].split("=");
    //         if (pair[0] == p){
    //             return pair[1].split('|');
    //         }
    //     }
    //     return false;
    // },

    initFilters: function() {
        $('.ml-nav-facet-clearall').hide();
        $('.ml-clear-container').hide();

        facetNav.filters['sortby'] = ['ourPicksAscend'];
        $('[data-facet]').each(function() {
            var facetName = $(this).attr('data-facet');
            facetNav.filters[facetName] = [];
            facetNav.facetNavState[facetName] = false;

            // var facetName = $(this).attr('data-facet');
            // var facetValue = facetNav.getFilterValueFromUrl(facetName);

            // if (facetValue) {
            //     facetNav.filters[facetName] = facetValue;

            //     // Loop through and select the filters that are in the request url
            //     for (var i = 0; i < facetValue.length; i++) {
            //         $('.ml-facet-value[data-facet-value="' + facetValue[i] + '"]').addClass('ml-selected');
            //     }

            //     // Remove disabled class from the clear link
            //     $(this).closest('.group').find('.ml-clear').removeClass('ml-disabled');
            // } else {
            //     facetNav.filters[facetName] = [];
                
            //     // Hide clear link
            //     $(this).closest('.group').find('.ml-clear').hide();
            // }
        });
    },

    modifyFilterValue: function(elem) {
        var facetName = elem.closest('[data-facet]').attr('data-facet');
        var facetValue = elem.attr('data-facet-value');

        if (elem.hasClass('ml-selected')) {
            for (var i = 0; i < facetNav.filters[facetName].length; i++) {
                if (facetNav.filters[facetName][i] === facetValue) {
                    facetNav.filters[facetName].splice(i, 1);
                    break;
                }
            }
        } else {
            facetNav.filters[facetName].push(facetValue);
        }
        elem.toggleClass('ml-selected');
        facetNav.reloadProducts(facetName);
    },

    buildRequestUrl: function() {
        // Loop through filters and build the request url
        var url = facetNav.baseUrl + facetNav.categoryUrl + "?"
        for (var filter in facetNav.filters) {
            if (facetNav.filters.hasOwnProperty(filter)) {
                if (facetNav.filters[filter].length === 0) {
                    continue;
                }
                url += filter + '=';
                url += facetNav.filters[filter].join('|');
                url += "&";
            }
        }
        url += facetNav.urlTail;
        console.log(url);
        return url;
    },

    setResponsiveness: function() {
        this.d = $('#bodyFacetedNavPlaceholder');
        this.e = $('#facetedNavContainer');
        this.f = this.e.find('.ml-facet-expand-target');
        this.leftControl = $('.ml-faceted-nav-left-control');
        this.toggleTarget = this.e.find('.ml-facet-expand-target');
        this.expandTargets = $('.ml-facet-expand-target');
        this.plusIconClass = 'ml-nav-facet-plus ml-icon-plus';
        this.minusIconClass = 'ml-nav-facet-minus ml-icon-minus';
        this.navToggle = this.leftControl.parent().find('.ml-nav-facet-expand-all-toggle');
        
        facetNav.isResponsive = false;

        // Set initial view
        if ($(window).width() < 768) {
            facetNav.isResponsive = true;
            facetNav.showResponsive();
            facetNav.e.show();
        }

        $(window).resize(function() {
            if ($(window).width() < 768) {
                if (!facetNav.isResponsive) {
                    // Switch to responsive view
                    facetNav.isResponsive = true;
                    facetNav.showResponsive();
                    facetNav.e.show();
                }
            } else {
                if (facetNav.isResponsive) {
                    // Switch to original view
                    facetNav.isResponsive = false;
                    facetNav.showOriginal();
                }
            }
        });

        // Set up toggling for the responsive facet navigation menu
        this.navToggle.click(function() {
            if (facetNav.navToggle.hasClass(facetNav.plusIconClass)) {
                // Hide responsive facet options
                facetNav.navToggle.addClass(facetNav.minusIconClass);
                facetNav.navToggle.removeClass(facetNav.plusIconClass);
                facetNav.expandTargets.hide();
            } else {
                // Show responsive facet options
                facetNav.navToggle.addClass(facetNav.plusIconClass);
                facetNav.navToggle.removeClass(facetNav.minusIconClass);
            }

            facetNav.leftControl.slideToggle('fast');
        });

        // $(window).resize(function() {
        //     var c = !1;
        //     if (facetNav.isExtraSmall()) {
        //         if (!facetNav.isResponsive) {
        //             facetNav.isResponsive = true;
        //             facetNav.showResponsive();
        //         }
        //         "bodyFacetedNavPlaceholder" !== facetNav.e.parent().attr("id") && (facetNav.d.length > 0 && facetNav.d.append(facetNav.e), facetNav.e.hasClass("ml-nav-facet-expanded") && (c = !0));
        //     } else {
        //         if (facetNav.isResponsive) {
        //             facetNav.isResponsive = false;
        //             facetNav.showOriginal();
        //         }
        //         ("leftNavContainer" !== facetNav.e.parent().attr("id") && (facetNav.f.each(function() {
        //             $(facetNav).removeAttr("style")
        //         }), $("#leftNavContainer").append(facetNav.e)), facetNav.e.hasClass("ml-nav-facet-expanded") || (c = !0))
        //     }
        // });
    },

    showResponsive: function() {
        var c = !1;
        this.d.append(this.e);
        this.navToggle.removeClass(this.minusIconClass);
        this.navToggle.addClass(this.plusIconClass);
        $('.ml-faceted-nav-left-control').hide();
        "bodyFacetedNavPlaceholder" !== facetNav.e.parent().attr("id") && (facetNav.d.length > 0 && facetNav.d.append(facetNav.e), facetNav.e.hasClass("ml-nav-facet-expanded") && (c = !0));

        // Initialize the toggles for the individual filters
        var expandToggles = $('.ml-nav-facet-expand-toggle');
        expandToggles.addClass('toggleable');
        expandToggles.click(function() {
            $(this).closest('.group').find('.ml-facet-expand-target').slideToggle('fast');
            var facetName = $(this).closest('.group').find('[data-facet]').attr('data-facet');
            // Change facet nav state
            facetNav.facetNavState[facetName] = !facetNav.facetNavState[facetName];
        });
    },

    showOriginal: function() {
        var c = !1;
        facetNav.leftControl.show();
        facetNav.e.show();
        facetNav.navToggle.removeClass(facetNav.plusIconClass);
        facetNav.expandTargets.show();
        var expandToggles = $('.ml-nav-facet-expand-toggle');
        expandToggles.unbind();
        expandToggles.removeClass('toggleable');
        $('#leftNavContainer').append(facetNav.e);

        // ("leftNavContainer" !== facetNav.e.parent().attr("id") && (facetNav.f.each(function() {
        //     $(facetNav).removeAttr("style")
        // }), $("#leftNavContainer").append(facetNav.e)), facetNav.e.hasClass("ml-nav-facet-expanded") || (c = !0))
    },

    bindFacets: function() {
        $('.ml-clear').click(function() {            
            // Clear selected class from filters under this data facet
            $(this).closest('.group').find('.ml-facet-value').removeClass('ml-selected');
            
            // Remove filters from array
            var facetName = $(this).closest('.group').find('[data-facet]').attr('data-facet');
            facetNav.filters[facetName].length = 0;

            // Reload products with new filters
            facetNav.reloadProducts(facetName);
        });

        $('.ml-facet-value').click(function() {
            facetNav.modifyFilterValue($(this));
        });

        // Loop through filters and select the ones that are in the array
        for (var filter in facetNav.filters) {
            if (facetNav.filters.hasOwnProperty(filter)) {
                for (var i = 0; i < facetNav.filters[filter].length; i++) {
                    $('.ml-facet-value[data-facet-value="' + facetNav.filters[filter][i] + '"]').addClass('ml-selected');
                };
            }
        }

        // Set up clear all link
        var clearAllLink = $('.ml-nav-facet-clearall a');
        clearAllLink.attr('href', 'javascript:;');

        clearAllLink.click(function() {
            // Clear filters and reload products
            for (var filter in facetNav.filters) {
                if (facetNav.filters.hasOwnProperty(filter)) {
                    facetNav.filters[filter].length = 0;
                    facetNav.facetNavState[filter] = false;
                }
            }
            facetNav.reloadProducts(null);
        });

        var selectedFilters = $('.ml-nav-facet-selected');
        selectedFilters.each(function() {
            var links = $(this).find('a');
            var dataLink = $(this).find('a').attr('href');
            links.attr('data-link', dataLink);
            links.attr('href', 'javascript:;');
        });

        $('.ml-nav-facet-selected').click(function() {
            // Remove this filter from list of filters
            // and reload products
            var url = $(this).find('a').attr('data-link');
            facetNav.setFiltersByUrl(url);
            facetNav.reloadProducts(null);
        });
    },

    setFiltersByUrl: function(url) {
        var query = url.split('?')[1];
        var vars = query.split('&');

        var filterCheck = {};

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            var key = pair[0];
            var values = pair[1].split('|');

            if (key === 'pp') {
                facetNav.filters[key] = ['15'];
            } else {
                facetNav.filters[key] = values;
            }
            filterCheck[key] = 1;
        }
        for (var filter in facetNav.filters) {
            if (facetNav.filters.hasOwnProperty(filter)) {
                if (!filterCheck[filter]) {
                    facetNav.filters[filter] = [];
                }  
            }
        }
    },

    init: function() {
        facetNav.setResponsiveness();
        facetNav.initFilters();
        facetNav.bindFacets();

        var sortBy = $('select[name=sortBy]');
        sortBy.removeAttr('onchange');
        sortBy.change(function() {
            facetNav.setSortBy($(this).val());
            facetNav.reloadProducts(null);
        });
    },

    setSortBy: function(url) {
        var query = url.split('?')[1];
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if(pair[0] == 'sortby') {
                facetNav.filters['sortby'] = [pair[1]];
            }
        }
        return(false);
    },

    reloadProducts: function(facetName) {
        var clearedAll = false;

        $('.ml-dir-header-category').append('<i class="fa fa-spinner fa-pulse filter-loading" style="margin-left: 15px; margin-top: 5px;"></i>');

        if (facetName) {
            var className = '.filterGroup_' + facetName;
            var clearContainer = $(className).find('.ml-clear-container');
            clearContainer.children().hide();
            clearContainer.show();
            clearContainer.append('<i class="fa fa-spinner fa-pulse filter-loading"></i>');
        } else {
            clearedAll = true;
            var clearAllContainer = $('.ml-nav-facet-clearall');
            clearAllContainer.children().hide();
            clearAllContainer.append('<i class="fa fa-spinner fa-pulse filter-loading"></i>');
        }

        var url = facetNav.buildRequestUrl();

        $.ajax({
            type: 'GET',
            url: url,
            success: function(data) {
                $('.filter-loading').remove();
                $('.ml-grid-view').html($(data).find('.ml-grid-view'));

                // Reinitialize navigation facets
                var facetedNavContainer = $('#facetedNavContainer');
                var navHtml = $(data).find('#facetedNavContainer');
                facetedNavContainer.replaceWith(navHtml);

                for (var filter in facetNav.filters) {
                    if (facetNav.filters.hasOwnProperty(filter)) {
                        var className = '.filterGroup_' + filter;

                        if (facetNav.filters[filter].length === 0) {
                            $(className).find('.ml-clear-container').hide();
                        } else {
                            var clearContainer = $(className).find('.ml-clear-container');
                            clearContainer.show();
                            clearContainer.find('.ml-clear').removeClass('ml-disabled');
                        }
                    }
                }
        
                // Reinitialize responsive view
                facetNav.setResponsiveness();
                facetNav.bindFacets();
                facetNav.leftControl.show();
                facetNav.navToggle.removeClass(facetNav.plusIconClass).addClass(facetNav.minusIconClass);
                // Reinitialize
                facetNav.reinitialize();
            },
            error: function(msg) {
                console.log('Error retrieving products');
                $('.filter-loading').remove();
                if (clearedAll) {
                    clearAllContainer.children().show();
                } else {
                    clearContainer.children().show();
                }
            }
        });
    },

    reinitialize: function() {
        swatches.init();
        directoryView.init();
        quickview.initButtons();
    },
};
facetNav.init();