import React from 'react'
import './VideoPlayer.css'
import VideoCardRight from '../components/VideoCardRight'
import Comment from './Comment'
import "../../node_modules/video-react/dist/video-react.css"
import {Player} from 'video-react';
import video from '../content/dfa733af-d7abd669.mp4'

export default function VideoPlayer() {
  return (
    <div className='vid-player'>
      <div className='vid-wrapper'>
      <video controls width="100%" className='video-frame'>
      <source src={video} type="video/mp4"
      />
    </video>
        <div className='vid-below'>
          <div className='vid-left'>
            <h2>Video Title</h2>
            <div className='dp-subscribe'>
              <div className='dp-name-subs'>
                <img className='vid-dp' src='https://images.pexels.com/photos/10951521/pexels-photo-10951521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
                <div className='vid-username-subs'>
                  <h3 className='vid-username-dp'>Username</h3>
                  <h5 className='vid-subs'>12k subscribers</h5>
                </div>
              </div>
              <button className='vid-sub'>
                <p>Subscribe</p>
              </button>
            </div>
             
          </div>

          <div className='vid-right'>
            <div className='vid-like-dis'>
              <div className='icon-but thumb-up'>
                <i class="fa-solid fa-thumbs-up vid-icon"></i>
                <p>123</p>
              </div>

              <div className='icon-but'>
                <i class="fa-solid fa-thumbs-down vid-icon"></i>
                <p>Dislike</p>
              </div>
            </div>
            
            <div className='icon-but vid-icon-wrap'>
              <i class="fa-solid fa-share vid-icon"></i>
              <p>Share</p>
            </div>

            <div className='icon-but vid-icon-wrap'>
              <i class="fa-solid fa-download vid-icon"></i>
              <p>Save</p>
            </div>
          </div>
        </div>

        <div className='vid-desc'>
          <div className='vid-desc-views-date'>
            <h3 className='vid-desc-views'>123 views</h3>
            <h3 className='vid-desc-date'>6 months</h3>
          </div>
          <div className='vid-description-content'>
            <h3 className='vid-description'>Adele's official lyric video for her single ‘Skyfall'. 
              As featured in the film 'Skyfall'. Click to buy/listen: http://smarturl.it/AdeleSkyfall
              Follow Adele
              Website: http://adele.com 
              Facebook: https://www.facebook.com/Adele 
              Twitter: https://twitter.com/Adele 
              Instagram: http://instagram.com/Adele </h3>
          </div>
        </div>

        <div className='write-comment'>
          <img className='vid-dp' src='https://images.pexels.com/photos/10951521/pexels-photo-10951521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
          <input className='comment-inp' placeholder='Add a comment...'></input>
        </div>

        <div className='comment-section'>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>

      <div className='vid-cards-right'>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>
        <VideoCardRight/>

      </div>
      
    </div>
  )
}
