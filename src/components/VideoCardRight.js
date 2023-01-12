import React from 'react'
import './VideoCardRight.css'

export default function VideoCardRight() {
  return (
    <div className='vid-card-right'>
        <div>
            <img className='vid-image-right' src='https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='img'/>
        </div>

        <div className='vid-info-right'>
            <div className='vid-title-dp'>
                <h4 className='vid-title'>Video Title very Long Title Texting Just In Case</h4>
            </div>
            <p className='vid-username'>Username</p>
            <div className='vid-date-info'>
                <p className='vid-views'>Views</p>
                <p className='vid-date-upl'>Date Uploaded</p>
            </div>
        </div>
        
    </div>
  )
}
