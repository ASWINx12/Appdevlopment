import React from 'react';
import Footer from './Footer';
import UserNavbar from './UserNavbar';


const Home = () => {
  // const email = useSelector((state) => state.email);
  return (
    <div className='home'>
      <UserNavbar/>
      <div className="home-container">
      <header className="home-section">
        <h1>Welcome to StaffSync</h1>
        <p>Your ultimate solution for efficient staff scheduling</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Easy Scheduling</h3>
            <p>Quickly create and manage staff schedules with our intuitive drag-and-drop interface.</p>
          </div>
          <div className="feature">
            <h3>Automated Notifications</h3>
            <p>Send automatic reminders to your team about their shifts and changes in real-time.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Updates</h3>
            <p>Keep everyone informed with instant updates on any schedule changes.</p>
          </div>
        </div>
      </section>
    </div>
      <Footer/>
    </div>
  );
};
export default Home;
