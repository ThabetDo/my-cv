$(document).ready(function() {
    if (innerWidth > 992) {
        // nice scroll effect
        mainScroll = $("body").niceScroll({
            cursorcolor: "#F73859", // change cursor color in hex
            cursoropacitymin: 0.2, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
            cursorwidth: "8px", // cursor width in pixel (you can also write "5px")
            cursorborder: "1px solid #404B69"// css definition for cursor border

        });
        secondScroll = $(".vertical").niceScroll({
            cursorcolor: "#F73859", // change cursor color in hex
            cursoropacitymin: 1, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
            cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
            cursorborder: "1px solid #000000" // css definition for cursor border
            //     railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
            //     railalign: right, // alignment of vertical rail
            //     railvalign: bottom, // alignment of horizontal rail
            //     cursorfixedheight: false, // set fixed height for cursor in pixel
            //     hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
            //     directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
            //     nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
            //     enablescrollonselection: true, // enable auto-scrolling of content when selection text
            //     cursordragspeed: 0.3, // speed of selection when dragged with cursor
            //     rtlmode: "auto", // horizontal div scrolling starts at left side
            //     cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
            //     oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
            //     scriptpath: "" // define custom path for boxmode icons ("" => same script path)
            //     preventmultitouchscrolling: true // prevent scrolling on multitouch events
            //     disablemutationobserver: false // force MutationObserver disabled,
            //     enableobserver: true // enable DOM changing observer, it tries to resize/hide/show when parent or content div had changed
            //     scrollbarid: false // set a custom ID for nicescroll bars

        });
    }
    // scroll behavior smooth
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});
//loading spinner
function loading() {
    $(".loading").height(0,1000);
    $(".loading span").fadeToggle();
}
setTimeout(loading,1500);