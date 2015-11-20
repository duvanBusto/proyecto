(function ($) {

  Drupal.behaviors.test_time_out = {
    attach: function(context, settings) {
      $('.test-ajax-time').click(function(e){
        e.preventDefault();
        var parametro = 'hola';
        var url = Drupal.settings.basePath + 'sites/default/files/ajax-loader.gif';
        var i = 0;
        var contentimg = '<div class="loading" style="position: absolute; width: 100%; text-align: center; top: 60%;"><img src="'+   url  +'"><p class="msg-process"></p></div>';
        $('body').css('opacity','0.5');
        $('body').append(contentimg);
        $(".msg-process").html(100 + "% Procesado, espere por favor...");
        // Declaro set interval
        // var mytime = setInterval(function(){
        //   i = i +10;
        //   $(".msg-process").html(i + "% Procesado, espere por favor...");
        // },2000);
        // Uso ajax
        $.ajax({
          url: Drupal.settings.basePath + 'test/ajax',
          type: 'POST',
          async: true,
          data: {
            'parametro': parametro,
          },
          dataType: "text",
          beforeSend: function(jqXHR, PlainObject, settings) {
            // setInterval(mytime);
          },
          success: function(result, textStatus, jqXHR){
            if (result){
              console.log('ingreso a result');
              // setTimeout(function(){
                $('.loading').css('display','none');
                $('body').css('opacity','1');
              // }, 2000);
              // clearInterval(mytime);
            }
          },
          // error: muestraError
        });
      });

      // Codigo de prueba con el aside
      var heigth_aside = $('.content-test').height();
      var heigth_content = $('.wrapper-test-content').height();
      if (heigth_aside < heigth_content){
        $('.content-test').css('height', heigth_content + 'px');
      }
      console.log(heigth_aside,'alto aside');
      console.log(heigth_content,'alto content');
    } // END attach: function(context, settings)
  }; // END Drupal.behaviors.providers
})(jQuery);
