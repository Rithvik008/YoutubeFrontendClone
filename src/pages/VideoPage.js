import React from 'react'
import Sidebar from '../components/Sidebar'
import './VideoPage.css'
import VideoPlayer from '../components/VideoPlayer'
import Navbar from '../components/Navbar'
export default function VideoPage() {
  return (
    <div className='vid-page'>
        <Sidebar/>
        <div className='main'>
            <Navbar/>
            <VideoPlayer/>
        </div>
        
    </div>
  )
}
