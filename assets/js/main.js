(function($) {
  "use strict";

  $(document).ready(function() {
    // Modal Button
    $('.tm-popup-toggle').on('click', function() {
      $('.tm-popup-wrap').addClass('tm-active');
    });

    $('.tm-btn, .tm-ex-overlay').on('click', function() {
      $(this).parents('.tm-popup-wrap').removeClass('tm-active');
    });
  });
})(jQuery); // End of use strict







