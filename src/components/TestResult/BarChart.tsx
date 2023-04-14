import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// hooks
import useTheme from "../../hooks/useTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({
  chartData,
  labels,
  ...props
}: {
  chartData: any;
  labels: string[];
}) {
  const { isDark } = useTheme();
  return (
    <Bar
      {...props}
      data={{
        labels,
        datasets: [
          {
            label: "gha",
            data: chartData,
            backgroundColor: [
              "rgba(67, 159, 248, 1)",
              "rgba(231, 62, 159, 1)",
              "rgba(114, 208, 99, 1)",
              "rgba(275, 196, 65, 1)",
              "rgba(149, 86, 208, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: isDark ? "#9BB3BB" : "#323232",
            },
            beginAtZero: true,
          },
          x: {
            ticks: {
              color: isDark ? "#9BB3BB" : "#323232",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label =
                  context.parsed.y.toFixed(1) + " " + context.dataset.label ||
                  "";

                return label;
              },
            },
          },
        },
      }}
    />
  );
}
