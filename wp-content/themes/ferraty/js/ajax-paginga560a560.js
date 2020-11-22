/* 
 * Enables AJAX paging
 */

jQuery(document).ready(function(){
  //paging of news:
  jQuery('#nav-below-news a').live('click', function(e){
    e.preventDefault();
    var link = jQuery(this).attr('href');
    jQuery('#newsPanelBody').html('<div style="text-align:center"><span id="refreshWheel" class="fa fa-refresh refresh-wheel spin"></span></div>');
    jQuery('#newsPanelBody').load(link+' #newsPanelBodyContent');
  });

  //showing single news in modal:
  jQuery('.news-link').live('click', function(e){
      e.preventDefault();
      var link = jQuery(this).attr('href');
      jQuery('#newsModalBody').html('<div style="text-align:center"><span id="refreshWheel" class="fa fa-refresh refresh-wheel spin"></span></div>');
      jQuery('#newsModal').modal();
      jQuery('#newsModalBody').load(link+' #main');
  });

  //paging inside modal:
  jQuery('#nav-below-news-single a').live('click', function(e){
    e.preventDefault();
    var link = jQuery(this).attr('href');
    jQuery('#newsModalBody').html('<div style="text-align:center"><span id="refreshWheel" class="fa fa-refresh refresh-wheel spin"></span></div>');
    jQuery('#newsModalBody').load(link+' #main');
  });

});
