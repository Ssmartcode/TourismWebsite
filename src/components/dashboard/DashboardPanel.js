import React from "react";
import "./DashboardPanel.css";
import { Link } from "react-router-dom";

const DashboardPanel = () => {
  return (
    <aside>
      <Link to="/dashboard">
        <i className="fas fa-folder-open fa-2x"></i>
      </Link>
      <Link to="/dashboard/create">
        <i className="fas fa-folder-plus fa-2x"></i>
      </Link>
      <Link to="/">
        <i className="fas fa-user-slash fa-2x"></i>
      </Link>
    </aside>
  );
};

export default DashboardPanel;
