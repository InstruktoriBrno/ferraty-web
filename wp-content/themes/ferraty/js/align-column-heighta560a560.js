

jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery('.height-origin').each(function () {
        jQuery(this).data('last-width', jQuery(this).width());
        if (jQuery(window).width() >= 992) { //only for big screens
            var originHeight = jQuery(this).height();
            var heightFollower = jQuery('.height-follower', jQuery(this).parent());
            var heightFollowerHeight = jQuery(heightFollower).height();
            if (heightFollowerHeight < originHeight) {
                jQuery(heightFollower).css('min-height', originHeight);
            }
        }
    });
    jQuery(window).on('resize', function() {
        if (jQuery(window).width() >= 992) { //only for big screens
            jQuery('.height-origin').each(function () {
                var lastWidth = jQuery(this).data('last-width');
                var originWidth = jQuery(this).width();
                if (lastWidth != originWidth) {//it is safer to check for width change instead of height change since width change changes height og heightFollower in our use case
                    var originHeight = jQuery(this).height();
                    var heightFollower = jQuery('.height-follower', jQuery(this).parent());
                    var heightFollowerHeight = jQuery(heightFollower).height();
                    if (heightFollowerHeight > originHeight) {
                        jQuery(heightFollower).css('min-height', 0);
                    }
                    //needs a separate test, since setting min-height to 0 may cause height fall
                    heightFollowerHeight = jQuery(heightFollower).height();
                    if (heightFollowerHeight < originHeight) {
                        jQuery(heightFollower).css('min-height', originHeight);
                    }
                    //update last-width data in the end
                    jQuery(this).data('last-width', originWidth);
                }
            });
        } else {
            jQuery('.height-follower').css('min-height', 0);
        }
    });
});