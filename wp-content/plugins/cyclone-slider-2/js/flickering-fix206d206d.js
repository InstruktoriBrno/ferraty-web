jQuery(document).ready(function(){
    var slideContainer = jQuery(".cycloneslider-slides");
    var height = jQuery(slideContainer).outerHeight();
    jQuery(slideContainer).css('min-height', height + "px");
});

function cyclone_flickering_fix_second_part() {
    var slideContainer = jQuery(".cycloneslider-slides");
    jQuery(slideContainer).css('min-height', "0px");
}