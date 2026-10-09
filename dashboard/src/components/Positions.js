import { React, useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios
    .get("http://localhost:3001/allpositions")
    .then((response) => {
      console.log("API response:", response.data); // ✅ Add this

      // Check if `response.data.data` is really an array
      if (Array.isArray(response.data.data)) {
        setPositions(response.data.data);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    })
    .catch((err) => {
      console.error("Error fetching positions:", err);
    });
}, []);

  if (error) {
    return <h3 className="title error">{error}</h3>;
  }

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const currentValue = stock.qty * stock.price;
              const profitLoss = currentValue - stock.qty * stock.avg;
              const profitClass = profitLoss >= 0 ? "profit" : "loss";
              const dayChangeClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg?.toFixed(2)}</td>
                  <td>{stock.price?.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currentValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayChangeClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
