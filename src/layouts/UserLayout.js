import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './UserLayout.css'; // for styles

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Sidebar />
      <div className="user-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
