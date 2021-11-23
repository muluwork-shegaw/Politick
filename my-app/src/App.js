import { useState, useCallback } from "react";
const api_url = "http://ws-old.parlament.ch/councillors?format=json";
function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  const response = useCallback(async () => {
    const data = await getapi();
    setData(data);
  }, []);
  console.log(data);

  const sorted = useCallback(async (value) => {
    const localdata = await getapi();

    const data = sorter(localdata, value);
    setData(data);
  }, []);
  const filtered = useCallback(
    async (value) => {
      const localdata = await getapi();

      const data = filter(localdata, value);
      setData(data);
    },
    [term]
  );
  return (
    <div>
      <input onChange={(e) => setTerm(e)} />
      <button onClick={(e) => filtered(term)}>filter BY firstName</button>
      <button onClick={(e) => sorted("firstName")}>sort BY firstName</button>
      <button onClick={(e) => sorted("lastName")}>sort BY lastName</button>

      <table
        style={{
          marginTop: "27px",
          marginLeft: "100px",
          border: "2px solid green",
          justifyContent: "center",
          borderCollapse: "collapse",
        }}
      >
        <th style={{ border: "1px solid black " }}>Id</th>
        <th style={{ border: "1px solid black " }}>firstName</th>
        <th style={{ border: "1px solid black " }}>lastName</th>
        {data.map((d) => (
          <tr key={d.id}>
            {Object.values(d).map((val) => (
              <td style={{ padding: "14px", border: "1px solid" }}>{val}</td>
            ))}
          </tr>
        ))}
      </table>

      <button onClick={response}>get Data</button>
    </div>
  );
}

export default App;

async function getapi(url) {
  const response = await fetch(api_url);
  const htmlResponse = await response.json();
  return htmlResponse.map((item) => {
    return { id: item.id, firstName: item.firstName, lastName: item.lastName };
  });
}

function sorter(data, sortedBy) {
  switch (sortedBy) {
    case "firstName":
      const res = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
      return res;

    case "lastName":
      return data.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }
}
function filter(data, string) {
  const res = data.filter((item) => item.firstName);
  console.log(res);
  return res;
}
