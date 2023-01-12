import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <Main/>
    </div>
  )
}
