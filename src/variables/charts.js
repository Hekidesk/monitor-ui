/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}


export const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
export const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
  },
  responsive: 1,
  scales: {
    y: {
      display: 0,
      ticks: {
        display: false,
        maxTicksLimit: 7,
      },
      grid: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false,
      },
    },
    x: {
      display: 0,
      ticks: {
        display: false,
      },
      grid: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false,
      },
    },
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};


