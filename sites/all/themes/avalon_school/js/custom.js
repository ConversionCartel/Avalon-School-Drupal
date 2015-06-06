// global script for handling the dom

jQuery(document).ready(function() {
var stickyNavTop = jQuery('#zone-menu-wrapper').offset().top;
 
var stickyNav = function(){
var scrollTop = jQuery(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    jQuery('#zone-menu-wrapper').addClass('sticky');
} else {
    jQuery('#zone-menu-wrapper').removeClass('sticky'); 
}
};
 
stickyNav();
 
jQuery(window).scroll(function() {
    stickyNav();
});
});