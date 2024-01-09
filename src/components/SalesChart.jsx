import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

Chart.defaults.font.size = 13;
Chart.defaults.font.weight = 500;
Chart.defaults.font.family = "mulish";

function SalesChart(props) {
  let dateArr
  let salesArr
  if (props.dataStatistic) {
    dateArr = props.dataStatistic.map((item) => item.date);
    salesArr = props.dataStatistic.map((item) => item.total);
  }

  return (
    <Line
      data={{
        labels: props.dataStatistic && dateArr,
        datasets: [
          {
            label: "# of votes",
            data: props.dataStatistic && salesArr,
            backgroundColor: "#1D4ED887",
            borderColor: "#1D4ED8",
            borderWidth: 2,
            fill: true,
          },
        ],
      }}
      options={{
        tension: 0.4,
        pointStyle: false,
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              callback: (value) =>  value,
              stepSize: 200,
            },
            beginAtZero: true,
          },
        },
      }}
      height={200}
      width={600}
    />
  );
}

export default SalesChart;
