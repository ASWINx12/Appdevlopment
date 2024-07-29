import React from 'react'
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'><Link to='/adminhome' className='navlink'>StaffSync</Link></h1>
      <Link to='/admin-dashboard' className='navlink'>Dashboard</Link>
      <Link to='/aboutus'className='navlink' >About Us</Link>
      {/* <Link to='/contactus'className='navlink' >Contact Us</Link> */}
      <Link to='/login'className='navlink' >Logout</Link>
      
    </div>
  )
}
export default AdminNavbar