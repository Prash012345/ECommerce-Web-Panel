import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Asset/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const API_URL = process.env.REACT_APP_API_URL;

    if (!token) {
      // Redirect to login if token is missing
      navigate('/');
    } else {
      // Optionally, validate token by sending a request to the backend
      fetch(`${API_URL}/auth/validate`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          // If the token is invalid, redirect to login
          navigate('/');
        }
      })
      .catch(() => {
        navigate('/');
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-tiles">
        <Link to="/categories" className="dashboard-tile">Category Manager</Link>
        <Link to="/items" className="dashboard-tile">Items Manager</Link>
        <Link to="/register" className="dashboard-tile">User Manager</Link>
        <Link to="/trending" className="dashboard-tile">Trending Manager</Link>
        <Link to="/promotion" className="dashboard-tile">Promotion Manager</Link>
        <Link to="/featured" className="dashboard-tile">Brand Featured Manager</Link>
        <Link to="/contact" className="dashboard-tile">Enquiry Manager</Link>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
