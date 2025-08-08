import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/user/playlist" className="sidebar-button">
        My Playlist
      </NavLink>
      <NavLink to="/user/upload" className="sidebar-button">
        Upload Video
      </NavLink>
      <NavLink to="/user/" className="sidebar-button">
        My Watchlist
      </NavLink>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default Sidebar;
