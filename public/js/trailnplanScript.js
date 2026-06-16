(function () {
  function drawTrailNPlanCharts() {
    if (!window.google?.charts) return;

    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(function () {
      drawBasic();
      drawBasic2();
      drawBasic3();
      drawChart4();
      drawChart5();
    });
  }

  window.drawTrailNPlanCharts = drawTrailNPlanCharts;

function drawBasic() {
  var chartElement = document.getElementById('chart_div_1');
  if (!chartElement) return;

      var data = google.visualization.arrayToDataTable([
        ['Activities', 'Responses'],
        ['Trail Running', 12],
        ['Ultra Marathon', 4],
        ['Marathon', 7],
        ['Cycling', 12],
        ['Hiking / Bushwalking', 23],
        ['Camping', 12],
        ['Races', 4],
        ['None of any above', 2]
      ]);

      var options = {
        title: 'A summary of users participation on one or more of the distanced activity',
        chartArea: {width: '50%'},
        colors: ['#4293d7'],
        width: 360,
        height: 300,
        hAxis: {
          title: 'Total Responses',
          minValue: 0
        },
        vAxis: {
          title: 'Activities'
        }
      };

      var chart = new google.visualization.BarChart(chartElement);

      chart.draw(data, options);
    }

    function drawBasic2() {
      var chartElement = document.getElementById('chart_div_2');
      if (!chartElement) return;

        var data = google.visualization.arrayToDataTable([
          ['Applications', 'Responses',],
          ['Google Map', 23],
          ['National Park Websites or Apps', 15],
          ['Sport Route Planner', 1],
          ['Spreadsheets', 7],
          ['Word Processors', 4],
          ['Survey Forms', 1],
          ['Social Media platforms', 12],
          ['Others', 6]
        ]);
  
        var options = {
          title: 'A summary of what apps or websites users use to plan the distanced sports or activities',
          chartArea: {width: '50%'},
          colors: ['#6e7f10'],
          width: 360,
          height: 300,
          hAxis: {
            title: 'Total Responses',
            minValue: 0
          },
          vAxis: {
            title: 'Applications'
          }
        };
  
        var chart = new google.visualization.BarChart(chartElement);
  
        chart.draw(data, options);
      }

      function drawBasic3() {
        var chartElement = document.getElementById('chart_div_3');
        if (!chartElement) return;

        var data = google.visualization.arrayToDataTable([
          ['Features', 'Popularity',],
          ['Attach memo notes on the map', 14],
          ['A diagram of the route technical details', 21],
          ['Estimated timing of the route', 22],
          ['Collaborative planner', 18],
          ['Carpooling planner', 16],
          ['Food, Groceries, convenient stores info nearby', 20],
          ['Real-time live update', 16],
          ['Others', 5]
        ]);
  
        var options = {
          title: 'Features to see on the new app',
          chartArea: {width: '60%'},
          colors: ['#ff9782'],
          width: 360,
          height: 300,
          hAxis: {
            title: 'Total Responses',
            minValue: 0
          },
          vAxis: {
            title: 'Applications'
          }
        };
  
        var chart = new google.visualization.BarChart(chartElement);
  
        chart.draw(data, options);
      }

      function drawChart4() {
        var chartElement = document.getElementById('chart_div_4');
        if (!chartElement) return;

        var data = google.visualization.arrayToDataTable([
          ['Rate', 'Responses'],
          ['5 - Very Likely', 6],
          ['4', 7],
          ['3', 8],
          ['2', 2],
          ['1 - Less Likely', 3]
        ]);

        var options = {
          title: 'Preferences to export route and logistic planning info a PDF or a physical copy',
          colors: ['#6e7f10', '#e1d830', '#ff9782', '#8ac1f1', '#4293d7'],
          width: 360,
          height: 300,
        };

        var chart = new google.visualization.PieChart(chartElement);

        chart.draw(data, options);
      }

      function drawChart5() {
        var chartElement = document.getElementById('chart_div_5');
        if (!chartElement) return;

        var data = google.visualization.arrayToDataTable([
          ['Rate', 'Responses'],
          ['Yes', 26],
          ['No', 1],
        ]);

        var options = {
          title: 'Preferences to make the app available offline',
          colors: ['#4293d7', '#6e7f10'],
          width: 360,
          height: 300,
        };

        var chart = new google.visualization.PieChart(chartElement);

        chart.draw(data, options);
      }
})();
