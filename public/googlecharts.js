google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart1() {
        axios
          .get("https://api.covid19api.com/summary")
          .then((response) => {
            const a = response.data;
            console.log(a);
            //console.log(a);
            var data = google.visualization.arrayToDataTable([
              ["Global", "Cases"],
              ["Conformed cases", a.Global.TotalConfirmed],
              ["Deaths", a.Global.TotalDeaths],
              ["Cured", a.Global.TotalRecovered],
            ]);

            var options = {
              title: "Global Wide Total Confirmed Cases",
              pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(
              document.getElementById("donutchart1")
            );
            chart.draw(data, options);
          })
          .catch((error) => console.error(error));
      }
    
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart2() {
        axios
          .get("https://api.covid19api.com/summary")
          .then((response) => {
            const a = response.data;
            var data = google.visualization.arrayToDataTable([
              ["Global", "Cases"],
              ["Conformed cases", a.Global.NewConfirmed],
              ["Deaths", a.Global.NewDeaths],
              ["Cured", a.Global.NewRecovered],
            ]);

            var options = {
              title: "Global Wide Newly Confirmed Cases",
              pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(
              document.getElementById("donutchart2")
            );
            chart.draw(data, options);
          })
          .catch((error) => console.error(error));
      }

      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart() {
        axios
          .get("https://api.covidindiatracker.com/state_data.json")
          .then((response) => {
            const a = response.data;
            var array = [
              ["States", "Recovered", "Confirmed", "Active", "Deaths"],
            ];
            for (var i = 0; i < a.length; i++) {
              var arr = [];
              arr.push(a[i].state);
              arr.push(a[i].recovered);
              arr.push(a[i].confirmed);
              arr.push(a[i].active);
              arr.push(a[i].deaths);
              array.push(arr);
            }
            for (var i = 0; i < a.length - 1; i = i + 2) {
              var element = `
                         <tr data-aos="fade-left">
                          <th scope="row">${a[i].state}</th>
                          <td><span class="badge badge-danger">${
                            a[i].deaths
                          }</span></td>
                          <td><span class="badge badge-success">${
                            a[i].active
                          }</span></td>
                          <td><span class="badge badge-primary">${
                            a[i].recovered
                          }</span></td>
                        </tr>
                        <tr data-aos="fade-right">
                          <th scope="row">${a[i + 1].state}</th>
                          <td><span class="badge badge-danger">${
                            a[i + 1].deaths
                          }</span></td>
                          <td><span class="badge badge-success">${
                            a[i + 1].active
                          }</span></td>
                          <td><span class="badge badge-primary">${
                            a[i + 1].recovered
                          }</span></td>
                        </tr>
                        `;
              var html = $($.parseHTML(element));
              $("#tabler").append(html);
            }
            var data = google.visualization.arrayToDataTable(array);

            var options = {
              title: "State-wise report cases in India",
              hAxis: { title: "State", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 1000 },
            };

            var chart = new google.visualization.AreaChart(
              document.getElementById("line-chart")
            );
            chart.draw(data, options);
          })
          .catch((error) => console.error(error));
      }