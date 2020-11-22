/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery.noConflict();
jQuery(document).ready(function() {
    // INDENT LINKS THE READ MORE LINK
    jQuery('.read-more').hover(function() {
            jQuery(this).stop().animate({ "paddingLeft" : "5px"}, 200);
    },function() {
            jQuery(this).stop().animate({"paddingLeft" : "0"});
    });

    // CHECK MAIN MENU VISIBILITY WHILE SCOLLING AND REACT ON IT
    jQuery(window).scroll(handleMainMenu);
    jQuery(window).scroll(handleSubMenu);

    // ENRICH REFERENCES BY SCROLLING ABILITY
    jQuery('a').live('click', function (event) {
        if (!jQuery(this).hasClass('no-animation')) {
            scrollOnAnchor(this.href, event);
        }
    });
    scrollOnAnchor(document.location.href, null);
});

function optElemHeight(elemId) {
    var elem = jQuery(elemId);
    if (elem.length===1) {
        return elem.outerHeight();
    } else {
        return 0;
    }
}

function scrollOnAnchor(full_url, event) {
        var parts = full_url.split("#");
        if (parts.length>1) {
            var hash = parts[parts.length-1];
            var scrollOn = jQuery('#'+hash);
            if (scrollOn.length === 1) {
                //change hash in URL without scrolling in browser
                scrollOn.attr('id', '');
                location.hash = hash;
                scrollOn.attr('id', hash);
                
                //switch the hidden tab on
                var tab = jQuery(scrollOn).closest('.tab-pane');
                if (tab.length === 1) {
                    if (jQuery(tab).css('display') === 'none') { //test if the target tab is hidden
                        var navbar_prefix = jQuery(tab).data('navbar-prefix');
                        var tabSwitcher = jQuery('a[data-navbar-prefix="'+ navbar_prefix + '"]');
                        jQuery(tabSwitcher).tab('show');
                    }
                }
                
                //consider menus creating top borders that could cover a target object 
                var menu = jQuery('#mountime-main-static-navbar');//fixed navbar is typically invisible at this moment, so we cannot use its height
                if (menu.length === 1) {
                    var submenu_id;
                    if (typeof $scrollspy_navbar_prefix === 'undefined') {
                        submenu_id = '#mountime-sub-static-navbar';
                    } else {
                        submenu_id = '#' + $scrollspy_navbar_prefix + '-static-navbar';
                    }
                    
                    var menuHeight = menu.outerHeight() +
                                     optElemHeight('#wpadminbar') +
                                     optElemHeight(submenu_id);
                    jQuery('html,body').animate({scrollTop: scrollOn.offset().top - menuHeight},'slow');
                    if (event !== null) {
                        event.preventDefault();
                    }
                }
            }
        }
}


function handleMainMenu() {
    var staticMenuElem = jQuery('#mountime-main-static-navbar');
    var fixedMenuElem = jQuery('#mountime-main-fixed-navbar');
    if (isScrolledIntoView(staticMenuElem)) {
        if (!fixedMenuElem.hasClass('hidden')) {
            fixedMenuElem.addClass('hidden');
        }
    } else {
        if (fixedMenuElem.hasClass('hidden')) {
            fixedMenuElem.hide();
            fixedMenuElem.removeClass('hidden');
            fixedMenuElem.fadeIn();
        }
    }
}


function handleSubMenu() {
    var $scrollspy_fixed_navbar_id = '';
    var $scrollspy_static_navbar_id = '';
    if (typeof $scrollspy_navbar_prefix === 'undefined') {
        $scrollspy_fixed_navbar_id = '#mountime-sub-fixed-navbar';
        $scrollspy_static_navbar_id = '#mountime-sub-static-navbar';
    } else {
        $scrollspy_fixed_navbar_id = '#' + $scrollspy_navbar_prefix + '-fixed-navbar';
        $scrollspy_static_navbar_id = '#' + $scrollspy_navbar_prefix + '-static-navbar';
    }

    
    var mainFixedMenuElem = jQuery('#mountime-main-fixed-navbar');
    var staticMenuElem = jQuery($scrollspy_static_navbar_id);
    var fixedMenuElem = jQuery($scrollspy_fixed_navbar_id);
    if (staticMenuElem.length !== 1 || fixedMenuElem.length !== 1 || mainFixedMenuElem.length !== 1) {
        return;
    }
    if (isScrolledIntoView(staticMenuElem, jQuery(mainFixedMenuElem).height())) {
        if (!fixedMenuElem.hasClass('hidden')) {
            fixedMenuElem.addClass('hidden');
        }
    } else {
        if (fixedMenuElem.hasClass('hidden')) {
            fixedMenuElem.css('margin-top',mainFixedMenuElem.outerHeight() + optElemHeight('#wpadminbar'));
            fixedMenuElem.hide();
            fixedMenuElem.removeClass('hidden');
            fixedMenuElem.fadeIn();
        }
    }
}


function isScrolledIntoView(elem, top_border)
{
    if (typeof top_border === "undefined") {
        top_border = 0;
    }    
    
    top_border += optElemHeight('#wpadminbar');

    var docViewTop = jQuery(window).scrollTop() + top_border;
    var docViewBottom = docViewTop + jQuery(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

