(function($) {
  Drupal.msBlocksCharts = Drupal.msBlocksCharts || {};
  google.load('visualization', '1', {packages: ['corechart', 'line']});

  Drupal.behaviors.msBlocksCharts = {
    attach: function(context, settings) {
      $('#chart-dash1-ue').once('chart-dasb1-ue', function() {
        google.setOnLoadCallback(Drupal.drawOneUe($(this).attr('id')));
      });

      $('#chart-dash1-pr').once('chart-dasb1-pro', function() {
        google.setOnLoadCallback(Drupal.drawOnePr($(this).attr('id')));
      });
    }
  };

  Drupal.drawOneUe = function(idElement) {
      var data = new google.visualization.DataTable();
      data.addColumn('datetime', 'Days');
      data.addColumn('number', 'Vinculaciones');
      data.addColumn('number', 'Productos');
      data.addRows([
        [new Date(2015, 7, 26), 95000, 820000],
        [new Date(2015, 7, 27), 4250000, 900000],
        [new Date(2015, 7, 28), 680000, 3120000],
        [new Date(2015, 7, 29), 400000, 2500000],
        [new Date(2015, 7, 30), 760000, 489000],
        [new Date(2015, 7, 31), 6500000, 1350000],
        [new Date(2015, 8, 1), 762000, 2800000],
        [new Date(2015, 8, 2), 80000, 3780000]
      ]);
      var options = {
        series: {
          0: {color: '#4B4B4B'},
          1: {color: '#00AAD6'}
        },
        hAxis: {
          title: 'Últimos 7 días',
          format: 'M/dd/yy',
          gridlines: {color: '#D8D8D8'},
          baselineColor: 'green'
        },
        vAxis: {
          title: 'Ganancias',
          textStyle: {color: 'green'},
          format: "$###,###,###",
          gridlines: {color: '#D8D8D8'}
        },
        tooltip: {
          showColorCode: true
        },
        pointsVisible: true,
        areaOpacity: '0.2',
        backgroundColor: '#FAFAFA'
      };

      var chart = new google.visualization.AreaChart(document.getElementById(idElement));
      chart.draw(data, options);
    }

    Drupal.drawOnePr = function(idElement) {
      var data = new google.visualization.DataTable();
      data.addColumn('datetime', 'Days');
      data.addColumn('number', 'Ventas');
      data.addRows([
        [new Date(2015, 7, 26), 820000],
        [new Date(2015, 7, 27), 900000],
        [new Date(2015, 7, 28), 3120000],
        [new Date(2015, 7, 29), 2500000],
        [new Date(2015, 7, 30), 489000],
        [new Date(2015, 7, 31), 1350000],
        [new Date(2015, 8, 1), 2800000],
        [new Date(2015, 8, 2), 3780000]
      ]);
      var options = {
        series: {
          0: {color: '#00AAD6'}
        },
        hAxis: {
          title: 'Últimos 7 días',
          format: 'M/dd/yy',
          gridlines: {color: '#D8D8D8'},
          baselineColor: 'green'
        },
        vAxis: {
          title: 'Ganancias',
          textStyle: {color: 'green'},
          format: "$###,###,###",
          gridlines: {color: '#D8D8D8'}
        },
        tooltip: {
          showColorCode: true
        },
        pointsVisible: true,
        areaOpacity: '0.2',
        backgroundColor: '#FAFAFA'
      };
      var chart = new google.visualization.AreaChart(document.getElementById(idElement));
      chart.draw(data, options);
    }

})(jQuery);
