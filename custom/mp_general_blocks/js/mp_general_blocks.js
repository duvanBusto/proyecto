(function ($) {

  Drupal.mgGeneralBlocks = Drupal.mgGeneralBlocks || {};

  Drupal.behaviors.mgGeneralBlocks = {
    attach: function(context, settings) {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        parallax : false,
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        mousewheelControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      });
    } // END attach: function(context, settings)
  }; // END Drupal.behaviors.msEditPage
})(jQuery);
