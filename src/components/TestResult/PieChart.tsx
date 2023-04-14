import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// hooks
import useTheme from "../../hooks/useTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({
  chartData,
  labels,
  ...props
}: {
  chartData: any;
  labels: string[];
}) {
  const { isDark } = useTheme();

  return (
    <Pie
      {...props}
      data={{
        labels,
        datasets: [
          {
            label: "gha",
            data: chartData,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              color: isDark ? "#9BB3BB" : "#323232",
              boxWidth: 20,
              boxHeight: 20,
              padding: 15,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label =
                  context.parsed.toFixed(1) + " " + context.dataset.label || "";

                return label;
              },
            },
          },
        },
      }}
    />
  );
}
