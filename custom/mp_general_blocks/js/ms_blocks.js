(function($) {

  Drupal.behaviors.msblocks = {
    attach: function(context, settings) {
      // DATE-PICKER BLOCK.
      $('html').once('user-meritocracy-block', function() {
      	$('.user-meritocracy-level-content').hide();
	      $('.user-meritocracy-level-wrapper').hover(
	        function () {
	          $('.user-meritocracy-level-content').show();
	        }
	        ,
	        function () {
	          $('.user-meritocracy-level-content').hide();
	        }
	      );
      });
    }
  };

})(jQuery);
