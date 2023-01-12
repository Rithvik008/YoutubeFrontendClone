import React from 'react'
import './Comment.css'
export default function Comment() {
  return (
    <div className='comment'>
        <img className='vid-dp' src='https://images.pexels.com/photos/10951521/pexels-photo-10951521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
        <div className='comment-info'>
            <div className='comment-username-date'>
                <h4 className='comment-username'>Username</h4>
                <h4 className='comment-date'>2 months ago</h4>
            </div>
            <p className='comment-content'>
                Very nice video. fire emojis Very nice video. fire emojis 
            </p>

        </div>
        
    </div>
  )
}
