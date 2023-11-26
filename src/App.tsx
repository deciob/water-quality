import "./App.css";
import { useGetIndicatorQuery } from "./api";
import { WBData } from "./types";

function App() {
  const { data } = useGetIndicatorQuery({
    country: "br",
    indicator: "AG.LND.ARBL.ZS",
  });

  return (
    <>
      <h1>{data && data[1] && data[1][0] && data[1][0].country.value}</h1>
      <h2>{data && data[1] && data[1][0] && data[1][0].indicator.value}</h2>
      <ul>
        {data &&
          data[1].map((d: WBData) => {
            if (d.value != undefined) {
              return (
                <li>
                  {d.date}: {Math.round(d.value)}%
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}

export default App;
