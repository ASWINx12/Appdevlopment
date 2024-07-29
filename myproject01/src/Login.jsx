import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminCredentials = {
      email: 'admin@gmail.com',
      password: 'admin123'
    };

    const userCredentials = {
      email: 'user@gmail.com',
      password: 'user123'
    };

    //for Checking if the credentials match the admin
    if (email === adminCredentials.email && password === adminCredentials.password) {
      console.log('Admin logged in');
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/adminhome');
    }
    //for Checking if the credentials match a regular user
    else if (email === userCredentials.email && password === userCredentials.password) {
      console.log('User logged in');
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/home');
    } else {
      console.log('Invalid credentials');
      alert('Invalid credentials');
    }
  };

  return (
    <div className='loginbody'>
      <div className='title'>
        <h1>Login</h1>
        <br />
        <br />
        <div className='form'>
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
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type='submit' className='loginbutton'>Login</button>
            <br />
            <p>Don't have an account? <Link to='/signup'>Create one!</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;