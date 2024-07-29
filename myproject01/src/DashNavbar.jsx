import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='dashnavbar'>
      <h1 className='logo'><Link to='/adminhome' className='navlink'>StaffSync</Link></h1>
      {/* <Link to='/dashboard' className='navlink'>Dashboard</Link>
      <Link to='/login'className='navlink' >Login</Link>
      <Link to='/signup'className='navlink' >Signup</Link> */}
    </div>
  )
}
export default Navbar