// Layout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Layout.css'; // Make sure to create and import the corresponding CSS file

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="layout-container">
      <header className="layout-header">
        <nav className="layout-nav">
          <button onClick={() => handleNavigate('/create-employee')}>
            <i className="fas fa-user-plus"></i> Create New Employee
          </button>
          <button onClick={() => handleNavigate('/employees/hired_in_date_range')}>
            <i className="fas fa-calendar-alt"></i> View Employees Hired in Date Range
          </button> 
          <button onClick={() => handleNavigate('/')}>
            <i className="fas fa-user-plus"></i> Active Employees
          </button>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;