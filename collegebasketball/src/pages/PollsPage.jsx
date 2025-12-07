import { useEffect, useState } from "react";
import Papa from "papaparse";
import PollsTable from "../components/PollsTable.jsx";
import ConferenceChart from "../components/ConferenceChart.jsx";

export default function PollsPage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    Papa.parse("polls.csv", {
      download: true,
      header: true,
      complete: (results) => setPolls(results.data),
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Basketball Polls</h1>

      <div style={{ display: "flex", marginTop: "20px" }}>
        <PollsTable polls={polls} />
        <ConferenceChart polls={polls} />
      </div>
    </div>
  );
}
