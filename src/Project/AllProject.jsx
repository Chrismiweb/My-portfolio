import React, { useState } from 'react'
import './AllProject.css'
import Project from './Project'
import car from "../video/car.mp4"
import unsplash from "../video/unsplash.mp4"
import restaurant from "../video/restaurant.mp4"
import github from "../video/github.mp4"




function AllProject() {
  const myPrpjectVideo = [
    {
      video: car,
      header: "Car Website",
      content: "this is a car website",
    },
    {
      video: unsplash,
      header: "Car Website",
      content: "this is a car website",
    },
    {
      video: restaurant,
      header: "Car Website",
      content: "this is a car website",
    },
    {
      video: github,
      header: "Car Website",
      content: "this is a car website",
    },
  ]

  const[showContent, SetShowContent] = useState(false);
  const hoverShow =()=>{
    SetShowContent(!showContent)
  }
  return (
    <div className='all-project'>
        <Project/>
        <div className='video-section'>
            {myPrpjectVideo.map((vid)=>(
              <div className='video-player' on={hoverShow}>
                  <video src={vid.video} controls loop autoPlay autostart type="video/mp4"/>
              </div>
              
            ))}
        </div>
        <div className={showContent ? "hello1" : 'hello2' }>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>

        </div>
    </div>
  )
}


export default AllProject