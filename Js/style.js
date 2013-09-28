$(window).load(function(){
// load on DOM ready
$(function() {
    // when you click the link w/ a class of 'overview'
	$('.overview').click(function() {
        // scroll to the DIV w/ an ID of 'overview'
        $.scrollTo( '#overview', 800, {easing:'swing'} );
            });
    $('.cms').click(function() {
        // scroll to the DIV w/ an ID of 'subcontracting'
        $.scrollTo( '#cms', 800, {easing:'swing'} );
               
    });
	$('.ecommerce').click(function() {
        // scroll to the DIV w/ an ID of 'expertise'
        $.scrollTo( '#ecommerce', 800, {easing:'swing'} );
            });
	$('.advanced').click(function() {
        // scroll to the DIV w/ an ID of 'outsource'
        $.scrollTo( '#advanced', 800, {easing:'swing'} );
               
    });			
});
});//]]>  
