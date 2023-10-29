// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

import { chartColor, gradientChartOptionsConfiguration } from "./charts";

export const spo2Data = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    const data = [542, 480, 430, 550, 542, 480, 430, 550, 542, 480, 430, 550];
    return {
      labels: Array(data.length).fill(""),
      datasets: [
        {
          label: "SpO2",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          tension: 0.4,
          data: data,
        },
      ],
    };
  },
  options: gradientChartOptionsConfiguration,
};
