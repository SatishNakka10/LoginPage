import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "220px",
          background: "#07305e",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Dashboard</h3>
        <ul>
          <li className="sidebarlinks">
            <Link to="/dashboard/sales">Sales</Link>
          </li>
            <li className="sidebarlinks">
            <Link to="/dashboard/ecommerce">Ecommerce</Link>
          </li>
            <li className="sidebarlinks">
            <Link to="/dashboard/jobs">Jobs</Link>
          </li>
           <li className="sidebarlinks">
            <Link to="/dashboard/analytics">Analytics</Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="sales" element={<h2 className="welcome">Welcome to Sales section</h2>} />
          <Route
            path="ecommerce"
            element={<h2 className="welcome">Welcome to Ecommerce section</h2>}
          />
          <Route path="jobs" element={<h2 className="welcome">Welcome to Jobs section</h2>} />
          <Route
            path="analytics"
            element={<h2 className="welcome">Welcome to Analytics section</h2>}
          />
          <Route path="*" element={<Navigate to="sales" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
