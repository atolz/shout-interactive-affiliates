import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
ChartJS.defaults.color = "#818FA3";
ChartJS.defaults.font = {
  size: 12,
  family: "'SF Pro Display', sans-serif !important",
  color: "#61D5FF",
};

const LineChart = () => {
  const data = {
    labels: [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: false,
        data: [, 41, 45, 60, 47, 58, 43, 40, 61, 45, 60, 95, 80],
        // borderColor: ["#61D5FF"],
        backgroundColor: ["#0a1f4431"],
        pointBorderColor: ["#61D5FF"],
        pointBackgroundColor: ["white"],
        borderWidth: 1,
      },
    ],
  };
  // const options = {
  //   legend: {
  //     display: false,
  //   },
  //   scales: {
  //     y: [
  //       {
  //         ticks: {
  //           max: 100,
  //           min: 0,
  //           stepSize: 20,
  //         },
  //       },
  //     ],
  //   },
  //   title: {
  //     display: true,
  //     text: "test...",
  //   },
  // };
  const options = {
    responsive: true,
    layout: {
      padding: 0,
    },
    plugins: {
      tooltip: { enabled: true },
      legend: {
        display: false,
      },
    },
    datasets: {
      line: {
        borderColor: "#61D5FF",
        fill: {
          target: "origin",
          // above: "rgb(255, 0, 0)", // Area will be red above the origin
          // below: "rgb(0, 0, 255)", // And blue below the origin
        },
        // tension: 1,
      },
    },
    scales: {
      x: {
        // display: false,
        // position: "bottom",
        grid: {
          display: false,
          color: "red",
          // beginAtZero: true,
        },
      },
      y: {
        max: 100,
        min: 0,
        beginAtZero: true,
        type: "linear",
        display: true,
        position: "left",
        grid: {
          drawTicks: false,
          borderDashOffset: 4,
          borderDash: [2],
          color: "#E5E9EC",
        },

        ticks: {
          stepSize: 20,
        },
        font: {
          size: "54px",
        },
      },
    },
  };
  return <Line data={data} options={options} />;
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
export default LineChart;
