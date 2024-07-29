import React, { useContext } from 'react';
import Footer from './Footer';
import UserSidebar from './UserSidebar'
import DashNavbar from './DashNavbar';
import { AppContext } from './AppContext';

const UserDashboard = () => {
  const { entries } = useContext(AppContext);

  return (
    <div>
      <DashNavbar />
      <UserSidebar/>
      <div className="dashboardbody">
        <h1>User Dashboard</h1>
        <section className='features-section'>
          <h4>View schedules for "Staff"</h4>
          <table className='dashboardtable'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Staff-Id</th>
                <th>Class</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.staffid}</td>
                  <td>{entry.class}</td>
                  <td>{entry.startTime}</td>
                  <td>{entry.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
