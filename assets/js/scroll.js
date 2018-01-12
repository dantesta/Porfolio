// Single page navigation, button to scroll up and down the page


$('a[href*="#"]')
  // Delete blank links
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
          // returns to top in 1.5 seconds
        }, 1500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus();
          };
        });
      }
    }
  });