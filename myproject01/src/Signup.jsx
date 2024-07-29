import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/login');
      alert("User created successully!");
    } else {
      alert("Passwords don't match!");
    }
  };
  return (
    <div className='signupbody'>
      <div className='signuptitle'>
        <h1>Signup</h1>
        <br />
        <br />
        <div className='signupform'>
          <form onSubmit={handleSubmit}>
            <label>Mail-Id</label>
            <br />
            <input
              type='email'
              required
              placeholder='Enter your mail-id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              type='password'
              required
              placeholder='Set your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <label>Re-Type your Password</label>
            <br/>
            <input
              type='password'
              required
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <br />
            <button type='submit' className='signupbutton'>Signup</button>
            <br />
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;