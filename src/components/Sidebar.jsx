import { NavLink } from "react-router-dom";
import { HiHome, HiChartBar, HiCog } from "react-icons/hi";

import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">My Panel</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink 
            to='/'
            end
            className={({ isActive })  => (isActive ? "sidebar-link active-link" : "sidebar-link") }
          >
            <HiHome className="icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/reports'
            className={({ isActive })  => (isActive ? "sidebar-link active-link" : "sidebar-link") }
          >
            <HiChartBar className="icon" />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/settings'
            className={({ isActive }) => (isActive ? "sidebar-link active-link" : "sidebar-link")}
          >
            <HiCog className="icon" />
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
