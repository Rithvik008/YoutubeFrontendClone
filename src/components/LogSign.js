import React from 'react'
import './LogSign.css'

export default function LogSign() {
  return (
    <div className='log-sign'>
      <div className='sign-container'>
        <div className='sign-log-in'>
            <h3 className='sign-text'>Sign In</h3>
            <center>
            <div>
              <input className='sign-inp' placeholder="username"/>
            </div>
            <div>
              <input className='sign-inp' placeholder="password"/>
            </div>
            </center>
            <center><button className='sign-button'>Sign In</button></center>
            
          </div>

          <h4 className='or'>or</h4>

          <div className='create-acc'>
            <center>
            <div>
              <input className='sign-inp' placeholder="username"/>
            </div>
            <div>
              <input className='sign-inp' placeholder="email"/>
            </div>
            <div>
              <input className='sign-inp' placeholder="password"/>
            </div>
            </center>
            <center><button className='sign-button'>Create Account</button></center>
            

          </div>


      </div>
        
    </div>
  )
}
