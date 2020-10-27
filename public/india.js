let chartConfig = {
    shapes: [
      {
        type: "zingchart.maps",
        options: {
          bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
          ignore: ["IND"], // ignore India because we are rendering a more specific India map below
          name: "world.countries",
          panning: false, // turn of zooming. Doesn't work with bounding box
          style: {
            tooltip: {
              borderColor: "#000",
              borderWidth: "2px",
              fontSize: "18px",
            },
            controls: {
              visible: false, // turn of zooming. Doesn't work with bounding box
            },
            hoverState: {
              alpha: 0.28,
            },
          },
          zooming: false, // turn of zooming. Doesn't work with bounding box
        },
      },
      {
        type: "zingchart.maps",
        options: {
          name: "ind",
          panning: false, // turn of zooming. Doesn't work with bounding box
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
              visible: false, // turn of zooming. Doesn't work with bounding box
            },
            hoverState: {
              alpha: 0.28,
            },
            items: {
              KA: {
                tooltip: {
                  text:
                    "Karnataka has 10905 confirmed cases, with 81069 total recovered cases.",
                  backgroundColor: "#ff5722",
                },
                backgroundColor: "#ff5722",
                label: {
                  visible: true,
                },
              },
              MH: {
                tooltip: {
                  text:
                    "Maharashtra has 141001 confirmed cases, with 1460755 total recovered cases.",
                  backgroundColor: "#41fb81",
                },
                backgroundColor: "#41fb81",
                label: {
                  visible: true,
                },
              },
              TL: {
                tooltip: {
                  text:
                    "Telangana has 1307 confirmed cases, with 19465 total recovered cases.",
                  backgroundColor: "#00AE4D",
                },
                backgroundColor: "#00AE4D",
                label: {
                  visible: true,
                },
              },
              TN: {
                tooltip: {
                  text:
                    "Tamil Nadu has 10924 confirmed cases, with 30606 total active cases.",
                  backgroundColor: "#362630",
                },
                backgroundColor: "#362630",
                label: {
                  visible: true,
                },
              },
              JK: {
                tooltip: {
                  text:
                    "Jammu and Kashmir has 1438 confirmed cases, with 7565 total active cases.",
                  backgroundColor: "#f9ad76",
                },
                backgroundColor: "#f9ad76",
                label: {
                  visible: true,
                },
              },
              HP: {
                tooltip: {
                  text:
                    "Himachal Pradesh has 286 confirmed cases, with 2516 total active cases.",
                  backgroundColor: "#7e8a2e",
                },
                backgroundColor: "#7e8a2e",
                label: {
                  visible: true,
                },
              },
              HR: {
                tooltip: {
                  text:
                    "Haryana has 1727 confirmed cases, with 10295 total active cases.",
                  backgroundColor: "#ceed57",
                },
                backgroundColor: "#ceed57",
                label: {
                  visible: true,
                },
              },
              UT: {
                tooltip: {
                  text:
                    "Uttarakhand has 984 confirmed cases, with 5002 total active cases.",
                  backgroundColor: "#554b92",
                },
                backgroundColor: "#554b92",
                label: {
                  visible: true,
                },
              },
              PB: {
                tooltip: {
                  text:
                    "Punjab has 4117 confirmed cases, with 4217 total active cases.",
                  backgroundColor: "#6c6733",
                },
                backgroundColor: "#6c6733",
                label: {
                  visible: true,
                },
              },
              UP: {
                tooltip: {
                  text:
                    "Uttar Pradesh has 6882 confirmed cases, with 27317 total active cases.",
                  backgroundColor: "#e3d318",
                },
                backgroundColor: "#e3d318",
                label: {
                  visible: true,
                },
              },
              BR: {
                tooltip: {
                  text:
                    "Bihar has 1049 confirmed cases, with 10223 total active cases.",
                  backgroundColor: "#ea93c5",
                },
                backgroundColor: "#ea93c5",
                label: {
                  visible: true,
                },
              },
              SK: {
                tooltip: {
                  text:
                    "Sikkim has 64 confirmed cases, with 328 total active cases.",
                  backgroundColor: "#5c87e1",
                },
                backgroundColor: "#5c87e1",
                label: {
                  visible: true,
                },
              },
              AR: {
                tooltip: {
                  text:
                    "Arunachal Pradesh has 33 confirmed cases, with 2260 total active cases.",
                  backgroundColor: "#240208",
                },
                backgroundColor: "#240208",
                label: {
                  visible: true,
                },
              },
              AS: {
                tooltip: {
                  text:
                    "Assam has 906 confirmed cases, with 17513 total active cases.",
                  backgroundColor: "#465c61",
                },
                backgroundColor: "#465c61",
                label: {
                  visible: true,
                },
              },
              NL: {
                tooltip: {
                  text:
                    "Nagaland has 21 confirmed cases, with 1895 total active cases.",
                  backgroundColor: "#465c61",
                },
                backgroundColor: "#465c61",
                label: {
                  visible: true,
                },
              },
              MN: {
                tooltip: {
                  text:
                    "Manipur has 139 confirmed cases, with 4164 total active cases.",
                  backgroundColor: "#64d800",
                },
                backgroundColor: "#64d800",
                label: {
                  visible: true,
                },
              },
              WB: {
                tooltip: {
                  text:
                    "West Bengal has 6487 confirmed cases, with 37017 total active cases.",
                  backgroundColor: "#b8ca31",
                },
                backgroundColor: "#b8ca31",
                label: {
                  visible: true,
                },
              },
              TN: {
                tooltip: {
                  text:
                    "Tamil Nadu has 10924 confirmed cases, with 30606 total active cases.",
                  backgroundColor: "#a4b121",
                },
                backgroundColor: "#a4b121",
                label: {
                  visible: true,
                },
              },
              TR: {
                tooltip: {
                  text:
                    "Tripura has 340 confirmed cases, with 2015 total active cases.",
                  backgroundColor: "#6e3bba",
                },
                backgroundColor: "#6e3bba",
                label: {
                  visible: true,
                },
              },

              MZ: {
                tooltip: {
                  text:
                    "Maharashtra has 141001 confirmed cases, with 1460755 total active cases.",
                  backgroundColor: "#4abcb0",
                },
                backgroundColor: "#4abcb0",
                label: {
                  visible: true,
                },
              },
              RJ: {
                tooltip: {
                  text:
                    "Rajasthan has 1839 confirmed cases, with 16668 total active cases.",
                  backgroundColor: "#a20ce8",
                },
                backgroundColor: "#a20ce8",
                label: {
                  visible: true,
                },
              },

              MP: {
                tooltip: {
                  text:
                    "Madhya Pradesh has 2885 confirmed cases, with 11237 total active cases.",
                  backgroundColor: "#4516d9",
                },
                backgroundColor: "#4516d9",
                label: {
                  visible: true,
                },
              },
              GJ: {
                tooltip: {
                  text:
                    "Gujarat has 3689 confirmed cases, with 13836 total active cases.",
                  backgroundColor: "#00002b",
                },
                backgroundColor: "#00002b",
                label: {
                  visible: true,
                },
              },
              CT: {
                tooltip: {
                  text:
                    "Chhattisgarh has 1818 confirmed cases, with 14349 total active cases.",
                  backgroundColor: "#a1b8d3",
                },
                backgroundColor: "#a1b8d3",
                label: {
                  visible: true,
                },
              },
              JH: {
                tooltip: {
                  text:
                    "Jharkhand has 866 confirmed cases, with 5844 total active cases.",
                  backgroundColor: "#c60dd4",
                },
                backgroundColor: "#c60dd4",
                label: {
                  visible: true,
                },
              },

              OR: {
                tooltip: {
                  text:
                    "Odisha has 1298 confirmed cases, with 17886 total active cases.",
                  backgroundColor: "#afe22b",
                },
                backgroundColor: "#afe22b",
                label: {
                  visible: true,
                },
              },
              AP: {
                tooltip: {
                  text:
                    "Andhra Pradesh has 6587 confirmed cases, with 30860 total active cases.",
                  backgroundColor: "#ee9d71",
                },
                backgroundColor: "#ee9d71",
                label: {
                  visible: true,
                },
              },
              KL: {
                tooltip: {
                  text:
                    "Kerala has 1333 confirmed cases, with 96688 total active cases.",
                  backgroundColor: "#e1768d",
                },
                backgroundColor: "#e1768d",
                label: {
                  visible: true,
                },
              },
              GA: {
                tooltip: {
                  text:
                    "Goa has 576 confirmed cases, with 2576 total active cases.",
                  backgroundColor: "#9af025",
                },
                backgroundColor: "#9af025",
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
          zooming: false, // turn of zooming. Doesn't work with bounding box
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