import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-header">
        <div>
          <h1 className="welcome-title">Welcome back, Emma Mackey!</h1>
          <p className="welcome-subtitle">Your comprehensive hospital dashboard at a glance.</p>
        </div>
        <div className="current-date">
          <p className="date-text">Wednesday, October 25, 2023</p>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="stats-cards-grid">
        {/* Total Patients Card */}
        <div className="stat-card">
          <div className="card-icon blue-bg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M12 15a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <p className="card-label">Total Patients</p>
          <h2 className="card-value">1,245</h2>
        </div>
        {/* Upcoming Appointments Card */}
        <div className="stat-card">
          <div className="card-icon green-bg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h8m-8 4h8m-8 4h8" />
            </svg>
          </div>
          <p className="card-label">Upcoming Appointments</p>
          <h2 className="card-value">54</h2>
        </div>
        {/* Pending Forms Card */}
        <div className="stat-card">
          <div className="card-icon yellow-bg">
          </div>
          <p className="card-label">Forms Pending Action</p>
          <h2 className="card-value">12</h2>
        </div>
        {/* Recent Reports Card */}
        <div className="stat-card">
          <div className="card-icon purple-bg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="8" x2="16" y2="16"></line>
              <line x1="8" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
          <p className="card-label">New Reports</p>
          <h2 className="card-value">7</h2>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="main-content-grid">
        {/* Quick Actions */}
        <div className="quick-actions-box">
          <h3 className="section-title">Quick Actions</h3>
          <div className="actions-buttons">
            <button className="action-btn sky-btn">
              Schedule New Appointment
            </button>
            <button className="action-btn indigo-btn">
              View All Patients
            </button>
            <button className="action-btn purple-btn">
              Submit Clinical Form
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity-box">
          <h3 className="section-title">Recent Activity</h3>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-icon-container">
                <span className="activity-icon">📝</span>
              </div>
              <div>
                <p className="activity-text">Form submitted for <span className="highlight">Jane Doe</span></p>
                <p className="activity-time">10 minutes ago</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon-container">
                <span className="activity-icon">📅</span>
              </div>
              <div>
                <p className="activity-text">New appointment with <span className="highlight">John Smith</span></p>
                <p className="activity-time">2 hours ago</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-icon-container">
                <span className="activity-icon">📊</span>
              </div>
              <div>
                <p className="activity-text">Monthly report <span className="highlight">generated</span></p>
                <p className="activity-time">Yesterday</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
