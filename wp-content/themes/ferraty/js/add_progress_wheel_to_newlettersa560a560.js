/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery.noConflict();
jQuery(document).ready(function() {
    var progressWheel = jQuery('.subscription-widget img.progress-wheel').clone();
    jQuery('.subscription-widget input[type="submit"]').on('click', function () {
        progressWheel.css('visibility', 'visible');
        jQuery('.subscription-widget .knews_add_user').append(progressWheel);
    });
});