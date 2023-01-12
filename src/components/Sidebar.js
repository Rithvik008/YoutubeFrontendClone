import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h2 className='logo'>YouTube</h2>

        <div className='links'>
          <div className='link'>
            <Link className='link' to='/' style={{textDecoration: 'none',color:'inherit',margin:'0px'}}>
            <i class="fa-solid fa-house"></i>
            <h4 className='link-text'>Home</h4>
            </Link>
          </div>

          <div className='link'>
            <i class="fa-solid fa-house"></i>
            <h4 className='link-text'>Explore</h4>
          </div>

          <div className='link'>
            <i class="fa-solid fa-house"></i>
            <h4 className='link-text'>Subscriptions</h4>
          </div>
          <hr></hr>
        </div>

        <div className='links'>
          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Library</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>History</h4>
          </div>
          <hr></hr>
        </div>

        <div className='links'>
          <h4 className='info'>Sign in to like videos, comment ,etc.</h4>
          <button className='sign-in'>SIGN IN</button>
          <hr></hr>
        </div>

        <div className='links'>
          <h4 className='info'>Best Of </h4>
          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Music</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Sports</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Gaming</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Movies</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>News</h4>
          </div>
          <hr></hr>
        </div>

        <div className='links'>
          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Settings</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Report</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Help</h4>
          </div>

          <div className='link'>
              <i class="fa-solid fa-house"></i>
              <h4 className='link-text'>Dark Mode</h4>
          </div>


          <hr></hr>
        </div>
    </div>
  )
}
