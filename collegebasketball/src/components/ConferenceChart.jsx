import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ConferenceChart({ polls }) {
  if (!polls || polls.length === 0) return <p>Loading chart...</p>;

  // Count teams by conference
  const conferenceCounts = polls.reduce((acc, row) => {
    if (!row.Conf) return acc;
    acc[row.Conf] = (acc[row.Conf] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(conferenceCounts);
  const values = Object.values(conferenceCounts);

  const data = {
    labels,
    datasets: [
      {
        label: "Teams per Conference",
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  return (
    <div style={{ width: "500px", marginLeft: "40px" }}>
      <h3>Teams by Conference</h3>
      <Bar data={data} />
    </div>
  );
}
