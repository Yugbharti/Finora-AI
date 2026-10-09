import { React, useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/allholdings")
      .then((response) => {
        const data = response.data?.data;

        if (Array.isArray(data)) {
          setHoldings(data);
        } else {
          console.error("Invalid response format", response.data);
          setHoldings([]); // fallback to empty
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const labels = holdings.map((sub_array) => sub_array["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const currentValue = stock.qty * stock.price;
            const profitLoss = currentValue - stock.qty * stock.avg >= 0.0;
            const profitClass = profitLoss ? "profit" : "loss";
            const dayChangeClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currentValue.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currentValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayChangeClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
