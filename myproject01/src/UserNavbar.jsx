import React from 'react'
import { Link } from 'react-router-dom'
const UserNavbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'><Link to='/home' className='navlink'>StaffSync</Link></h1>
      <Link to='/user-dashboard' className='navlink'>Dashboard</Link>
      <Link to='/aboutus'className='navlink' >About Us</Link>
      <Link to='/contactus'className='navlink' >Contact Us</Link>
      <Link to='/login'className='navlink' >Logout</Link>
    </div>
  )
}
export default UserNavbar