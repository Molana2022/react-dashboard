import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">My Panel</h2>

      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
