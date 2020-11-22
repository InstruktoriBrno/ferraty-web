    /* 
 * Enables Scroll spying
 */

jQuery(document).ready(function(){
    var $scrollspy_fixed_navbar_id = '';
    var $scrollspy_static_navbar_id = '';
    if (typeof $scrollspy_navbar_prefix === 'undefined') {
        $scrollspy_fixed_navbar_id = '#mountime-sub-fixed-navbar';
        $scrollspy_static_navbar_id = '#mountime-sub-static-navbar';
    } else {
        $scrollspy_fixed_navbar_id = '#' + $scrollspy_navbar_prefix + '-fixed-navbar';
        $scrollspy_static_navbar_id = '#' + $scrollspy_navbar_prefix + '-static-navbar';
    }

    var menuHeight = optElemHeight('#mountime-main-static-navbar') +
                     optElemHeight('#wpadminbar') +
                     optElemHeight($scrollspy_static_navbar_id);
    jQuery($scrollspy_fixed_navbar_id).appendTo('body');
    jQuery('body').scrollspy({ target: $scrollspy_fixed_navbar_id, offset: menuHeight + 50 });
});

