google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Global", "Cases"],
    ["Conformed cases", 11],
    ["Active", 2],
    ["Cured", 2],
    ["Deaths", 2],
  ]);

  var options = {
    title: "Global Cases",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["States", "Cured", "Deaths"],
    ["Andhra phradesh", 1000, 400],
    ["Tamil nadu", 1170, 460],
    ["Maharastra", 660, 1120],
    ["Kerala", 1140, 540],
    ["Bihar", 1450, 140],
    ["Chhattisgarh", 1350, 240],
    ["Haryana", 1053, 340],
    ["Himachal ", 1440, 740],
    ["Goa", 1053, 580],
    ["Manipur", 1670, 560],
    ["Meghalaya", 1345, 640],
    ["Arunachal", 1034, 570],
    ["Kashmir", 1563, 840],
    ["Haryana", 1045, 940],
    ["Rajastan", 1450, 570],
    ["Gujarat", 1056, 840],
    ["Mizoram", 1068, 580],
    ["Andaman", 1034, 570],
  ]);

  var options = {
    title: "State-wise report cases in India",
    hAxis: { title: "State", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("line-chart")
  );
  chart.draw(data, options);
}

let chartConfig = {
  shapes: [
    {
      type: "zingchart.maps",
      options: {
        bbox: [67.177, 36.494, 98.403, 6.965],
        ignore: ["IND"],
        name: "world.countries",
        panning: false,
        style: {
          tooltip: {
            borderColor: "#000",
            borderWidth: "2px",
            fontSize: "18px",
          },
          controls: {
            visible: false,
          },
          hoverState: {
            alpha: 0.28,
          },
        },
        zooming: false,
      },
    },
    {
      type: "zingchart.maps",
      options: {
        name: "ind",
        panning: false,
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: "#000",
            borderWidth: "2px",
            fontSize: "18px",
          },
          borderColor: "#000",
          borderWidth: "2px",
          controls: {
            visible: false,
          },
          hoverState: {
            alpha: 0.28,
          },
          items: {
            KA: {
              tooltip: {
                text: "Karnataka has 2,851 monthly users total",
                backgroundColor: "#ff5722",
              },
              backgroundColor: "#ff5722",
              label: {
                visible: true,
              },
            },
            MH: {
              tooltip: {
                text: "Maharashtra has 2,683 monthly users total",
                backgroundColor: "#ff9800",
              },
              backgroundColor: "#ff9800",
              label: {
                visible: true,
              },
            },
            TL: {
              tooltip: {
                text: "Telangana has 1,494 monthly users total",
                backgroundColor: "#00AE4D",
              },
              backgroundColor: "#00AE4D",
              label: {
                visible: true,
              },
            },
            TN: {
              tooltip: {
                text: "Tamil Nadu has 1,968 monthly users total",
                backgroundColor: "#00bcd4",
              },
              backgroundColor: "#00bcd4",
              label: {
                visible: true,
              },
            },
          },
          label: {
            // text displaying. Like valueBox
            fontSize: "15px",
            visible: false,
          },
        },
        zooming: false,
      },
    },
  ],
};

zingchart.loadModules("maps,maps-ind,maps-world-countries");
zingchart.render({
  id: "india",
  data: chartConfig,
  height: "100%",
  width: "100%",
});
