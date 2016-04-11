function AdjustH(){
    var headerH = jQuery('header').height();
    var footerH = jQuery('footer').height()+180;
    var temp_total = headerH + footerH;
    var content_height = jQuery('section').height();
    var winH = innerHeight;
    var totalH = winH - temp_total;
    if(winH > (temp_total + content_height)){
        jQuery('section').css('min-height',totalH);
        jQuery('section').css('overflow','hidden');
    }
}
jQuery(window).resize(function() {

    AdjustH();
});
jQuery(window).load(function() {

    AdjustH();
});
jQuery('.nav a').click(function(){ jQuery('.navbar-toggle').click(); })