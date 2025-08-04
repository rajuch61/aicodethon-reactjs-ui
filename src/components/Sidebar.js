import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaUpload,
  FaListAlt,
  FaHistory,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/profile" className="sidebar-button">
        <FaUserCircle className="sidebar-icon" />
        My Profile
      </Link>
      <Link to="/upload" className="sidebar-button">
        <FaUpload className="sidebar-icon" />
        Upload Video
      </Link>
      <Link to="/watchlist" className="sidebar-button">
        <FaListAlt className="sidebar-icon" />
        My Watchlist
      </Link>
      <Link to="/history" className="sidebar-button">
        <FaHistory className="sidebar-icon" />
        History
      </Link>
      <Link to="/settings" className="sidebar-button">
        <FaCog className="sidebar-icon" />
        Settings
      </Link>
      <Link to="/logout" className="sidebar-button">
        <FaSignOutAlt className="sidebar-icon" />
        Logout
      </Link>
    </div>
  );
}

export default Sidebar;
