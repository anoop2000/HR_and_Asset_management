import { useState } from "react";
import Sidebar from "./navigation/Sidebar.jsx";
import NavigationBar from "./navigation/Navbar.jsx";

import Dashboard from "../pages/Dashboard/DashboardView.jsx";
import Employees from "../pages/Employees/EmployeesView.jsx";
import Payroll from "../pages/Payroll/PayrollView.jsx";
import Attendance from "../pages/Attendance/AttendanceView.jsx";
import Documents from "../pages/Documents/DocumentView.jsx";
import Assets from "../pages/Assets/AssetsView.jsx";
import MyRequests from "../pages/MyRequests/MyRequests.jsx";
import Reports from "../pages/Reports/ReportsView.jsx";
import Masters from "../pages/Masters/MastersView.jsx";

import "../style/layout.css";

export default function Layout() {
  const [activeKey, setActiveKey] = useState("My Requests");

  const renderContent = () => {
    switch (activeKey) {
      case "Dashboard":
        return <Dashboard />;
      case "Employees":
        return <Employees />;
      case "Payroll":
        return <Payroll />;
      case "Attendance":
        return <Attendance />;
      case "Documents":
        return <Documents />;
      case "Assets":
        return <Assets />;
      case "My Requests":
        return <MyRequests />;
      case "Reports":
        return <Reports />;
      case "Masters":
        return <Masters />;
      default:
        return <MyRequests />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar activeKey={activeKey} onSelect={setActiveKey} />

      <div className="app-main">
        <NavigationBar />

        <div className="app-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
