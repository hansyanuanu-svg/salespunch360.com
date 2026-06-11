import { useState, useEffect } from "react";

const API = "https://api.salespunch360.com";

export default function App() {
  const [page, setPage] = useState("home");
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch(API)
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(err => setStatus("API not reachable"));
  }, []);

  return (
    <div style={{ display: "flex", fontFamily: "Arial" }}>
      
      <div style={{ width: 200, background: "#111", color: "#fff", height: "100vh", padding: 20 }}>
        <h3>SalesPunch</h3>
        <button onClick={() => setPage("home")}>Home</button><br/>
        <button onClick={() => setPage("gps")}>GPS</button><br/>
        <button onClick={() => setPage("admin")}>Admin</button>
      </div>

      <div style={{ padding: 20 }}>
        
        <h4>API Status:</h4>
        <p>{status}</p>

        {page === "home" && <h2>Dashboard Home</h2>}
        {page === "gps" && <h2>GPS Tracking Panel</h2>}
        {page === "admin" && <h2>Admin Panel</h2>}
      </div>

    </div>
  );
}
