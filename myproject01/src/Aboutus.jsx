import React from 'react';
import Navbar from './AdminNavbar';
import Footer from './Footer';


const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to StaffSync, where we strive to provide the best scheduling solutions for your staff.
          Our mission is to enhance workplace efficiency through innovative technology and user-friendly design.
        </p>
        <p>
          Our team consists of experienced professionals dedicated to creating a seamless experience for our users.
          We believe in the power of collaboration and aim to bring teams closer together through effective communication and organization.
        </p>
        <p>
          Thank you for choosing StaffSync. We look forward to helping you optimize your scheduling needs!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
