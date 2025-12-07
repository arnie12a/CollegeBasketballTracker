export default function PollsTable({ polls }) {
    if (!polls || polls.length === 0) return <p>Loading...</p>;
  
    const columns = Object.keys(polls[0]);
  
    return (
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {polls.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  