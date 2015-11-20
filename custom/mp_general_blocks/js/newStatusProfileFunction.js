(function($) {

  Drupal.newStatusProfileFunction = Drupal.newStatusProfileFunction || {};
  // Bandera para ejecutar el ajax, no entra si no ha terminado el primero.
  Drupal.newStatusProfileFunction.ajaxExecute = false;

  // Validar La url del Video vía ajax (php) y traer el resultado embebido.
  Drupal.getUserProfileAjax = function(element) {
    // Active Element - One Call. - Bandera
    if (!Drupal.newStatusProfileFunction.ajaxExecute) {
      // Bandera para no ejecutar mas.
      Drupal.newStatusProfileFunction.ajaxExecute = true;
      // Se activa el elemento del header.
      $('.toggle-profile-ajax').addClass('active');
      // Element principal.
      $element = $('.' + element);
      $element.addClass('open-menu');
      // Agregar ícono mientras se carga la info.
      $element.append('<span class="glyphicon glyphicon-refresh glyphicon-spin" style="font-size: 10em;"></span>');
      $element.addClass('spin-active');
      // Inicia Ajax.
      $.ajax({
        url: Drupal.settings.basePath + "post/ajax/getuserprofileajax",
        type: "POST",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          // Bandera
          Drupal.newStatusProfileFunction.ajaxExecute = false;
          // Info HTML.
          if (data) {
            // Para cerrar.
            var closeToggle = '<span class="glyphicon glyphicon-remove remove-profile-ajax"></span>';
            // Print Data.
            if ($('.toggle-profile-ajax').hasClass('active')) {
              $element.removeClass('spin-active');
              $element.html(closeToggle + data);
            };
            // New Events.
            $('.remove-profile-ajax').click(function () {
              $('.toggle-profile-ajax').removeClass('active');
              $element.html('');
              $element.removeClass('open-menu');
            });
          }
          else {
            console.log('Entro a nada.');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // Bandera
          Drupal.newStatusProfileFunction.ajaxExecute = false;
        }
      });
    };
  };

  Drupal.behaviors.newStatusProfileFunction = {
    attach: function(context, settings) {

      // MENU PERFIL DEL USUARIO.
      $('.toggle-profile-ajax').click(function() {
        // Entra si no tiene la clase active.
        if (!$(this).hasClass('active')) {
          Drupal.getUserProfileAjax($(this).attr('data-replace'));
        }
        else {
          $element = $('.' + $(this).attr('data-replace'));
          $element.html('');
          $element.removeClass('open-menu');
          $(this).removeClass('active');
        }
      });

      // MENU PRINCIPAL.
      $('.icon-menu-mobile').once('menu-mobile', function () {
        $('.icon-menu-mobile').click(function () {
          $currentElement = $(this);
          $elementM = $('#block-menu-menu-new-options-ecommerce');

          if (!$currentElement.hasClass('active')) {
            $elementM.css('overflow', 'initial');
            $elementM.addClass('open-menu');
            $currentElement.addClass('active');
          }
          else if ($currentElement.hasClass('active')) {
            $elementM.removeClass('open-menu');
            $elementM.css('overflow', 'hidden');
            $currentElement.removeClass('active');
          }

        });
      });
    }
  };

})(jQuery);
