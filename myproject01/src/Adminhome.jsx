import React from 'react';
import Footer from './Footer';
import AdminNavbar from './AdminNavbar';

const AdminHome = () => {
  return (
    <div className='home'>
      <AdminNavbar/>
      <div className="home-container">
        <header className="home-section">
          <h1>Welcome to the Admin Homepage</h1>
          <p>Here you can manage staff schedules, view reports, and configure settings.</p>
        </header>
        
        <section className="features-section">
          <h2>Features</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Manage Staff Schedules</h3>
              <p>Add, edit, and remove staff schedules. Ensure your team is properly allocated.</p>
              <a href="/admin-dashboard" className='feature-link'>Go to Schedules</a>
            </div>
            <div className="feature-card">
              <h3>User Management</h3>
              <p>View and manage user accounts. Assign roles and permissions.</p>
              <a href="/user-management" className='feature-link'>Go to User Management</a>
            </div>
            <div className="feature-card">
              <h3>Reports</h3>
              <p>Generate and view reports on staff activities and schedules.</p>
              <a href="/reports" className='feature-link'>Go to Reports</a>
            </div>
            <div className="feature-card">
              <h3>Settings</h3>
              <p>Configure application settings, manage preferences, and update your profile.</p>
              <a href="/settings" className='feature-link'>Go to Settings</a>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminHome;