/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function expeditionShowMore(event) {
    var frame = jQuery(event.target).closest('.expedition-frame');
    jQuery('.expedition-excerpt',frame).fadeOut(400, function() {
        jQuery('.expedition-details',frame).on('shown.bs.collapse', function () {
            jQuery('body').scrollspy('refresh'); //changed body length!
        });
        jQuery('.expedition-details',frame).collapse('show');
    });
    event.stopPropagation();
    event.preventDefault();
}
