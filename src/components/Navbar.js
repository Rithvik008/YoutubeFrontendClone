import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <input className='search-bar'></input>
      <Link to='/log-sign'><button className='sign-in2'>SIGN IN</button></Link>
    </div>
  )
}
