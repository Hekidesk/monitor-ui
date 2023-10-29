export const heartbeatData = {
  data: () => {
    var chartColor = "#FE5558";
    const data = [
      0, 0, 0, 0, 0, 200, -200, 0, 0, 0, 0, 200, -200, 0, 0, 0, 200, -200, 0, 0,
      0, 0, 200, -200, 0, 0, 0, 0, 200, -200, 0, 0, 0, 0, 200, -200, 0, 0, 0,
      200, -200, 0, 0, 0, 0, 0, 200, -200, 0, 0, 0, 0, 200, -200, 0, 0, 0, 200,
      -200, 0, 0,
    ];

    return {
      labels: Array(data.length).fill(""),
      datasets: [
        {
          label: "Heartbeat",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#f8f8f8",
          pointHoverBackgroundColor: "#f8f8f8",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          fill: true,
          borderWidth: 2,
          tension: 0.1,
          data: data,
        },
      ],
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 10,
        },
        grid: {
          drawTicks: true,
          drawBorder: false,
          display: true,
          color: "rgba(255,255,255,0.09)",
          zeroLineColor: "transparent",
        },
      },
      x: {
        grid: {
          display: false,
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          padding: 10,
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
        },
      },
    },
  },
};
