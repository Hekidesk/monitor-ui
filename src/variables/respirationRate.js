import {
  chartColor,
  gradientChartOptionsConfiguration,
  hexToRGB,
} from "./charts";

export const respirationRate = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    const data = [40, 500, 650, 700, 1200, 1250, 1300, 1900];
    return {
      labels: Array(data.length).fill(""),
      datasets: [
        {
          label: "respiration rate",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
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
