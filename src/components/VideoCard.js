import React from 'react'
import './VideoCard.css'
import { Link } from 'react-router-dom'

export default function VideoCard() {
  return (
    <div className='video-card'>
      <Link to='/video/:videoId' style={{textDecoration: 'none',color:'inherit'}}>
        <img className='image' src='https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='img'/>
        <div className='title-dp'>
            <img className='dp' src='https://images.pexels.com/photos/10951521/pexels-photo-10951521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
            <h4 className='title'>Video Title</h4>
        </div>
        <p className='username lighter'>Username</p>
        <div className='date-info'>
            <p className='views lighter'>Views</p>
            <p className='date-upl lighter'>Date Uploaded</p>
        </div>
        </Link>
    </div>
  )
}
