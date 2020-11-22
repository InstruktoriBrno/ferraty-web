/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function outdoorActivityShowMore(event) {
    var frame = jQuery(event.target).closest('.outdoor-activity-frame');
    jQuery('.outdoor-activity-excerpt',frame).fadeOut(400, function() {
        jQuery('.outdoor-activity-details',frame).on('shown.bs.collapse', function () {
            jQuery('body').scrollspy('refresh'); //changed body length!
        });
        jQuery('.outdoor-activity-details',frame).collapse('show');
    });
    event.stopPropagation();
    event.preventDefault();
}