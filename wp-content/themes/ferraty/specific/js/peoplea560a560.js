/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function peopleShowMore(event) {
    var frame = jQuery(event.target).closest('.people-single-container');
    jQuery('.people-excerpt',frame).fadeOut(400, function() {
        jQuery('.people-details',frame).on('shown.bs.collapse', function () {
            jQuery('body').scrollspy('refresh'); //changed body length!
        });
        jQuery('.people-details',frame).collapse('show');
    });
    event.stopPropagation();
    event.preventDefault();
}
