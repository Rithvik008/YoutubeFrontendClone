import React from 'react'
import LogSign from '../components/LogSign'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './SignIn.css'

export default function SignIn() {
  return (
    <div className='sign'>
        <Sidebar/>
        <div className='main'>
          <Navbar/>
          <LogSign/>
        </div>
    </div>
  )
}
