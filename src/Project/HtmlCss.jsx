import React, { useState } from 'react'
import Project from './Project'
import car from "../video/car.mp4"
import unsplash from "../video/unsplash.mp4"
import restaurant from "../video/restaurant.mp4"
import github from "../video/github.mp4"
import iphone from "../video/iphone.mp4"
import bigabi from "../video/bigabi.mp4"

function HtmlCss() {
    const myPrpjectVideo = [
        {
          video: restaurant,
          header: "Car Website",
          content: "In the code above, rgba(255, 0, 0, 0.5) sets the background color to red with 50% transparency. The first three values (255, 0, 0) represent the red, green, and blue components (pure red), and the last value (0.5) sets the alpha channel to 0.5, making the background 50% transparent. You can adjust the alpha value to control the level of transparency.",
          languageOne: "HTML",
          languageTwo: "CSS",
          languageThird: "React",
          Project: "Open Project",
          github: "Open Github",
          ProjectUrl: "https://wavang.com/",
          githubUrl: "https://www.google.com/search?q=hh&rlz=1C1KNTJ_enNG1077NG1077&oq=hh&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTIxODdqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8",
    
    
        },
        {
          video: github,
          header: "Car Website",
          content: "In the code above, rgba(255, 0, 0, 0.5) sets the background color to red with 50% transparency. The first three values (255, 0, 0) represent the red, green, and blue components (pure red), and the last value (0.5) sets the alpha channel to 0.5, making the background 50% transparent. You can adjust the alpha value to control the level of transparency.",
          languageOne: "HTML",
          languageTwo: "CSS",
          languageThird: "React",
          Project: "Open Project",
          github: "Open Github",
          ProjectUrl: "https://www.google.com/search?q=hh&rlz=1C1KNTJ_enNG1077NG1077&oq=hh&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTIxODdqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8",
          githubUrl: "https://wavang.com/",
        },
        {
          video: iphone,
          header: "Car Website",
          content: "In the code above, rgba(255, 0, 0, 0.5) sets the background color to red with 50% transparency. The first three values (255, 0, 0) represent the red, green, and blue components (pure red), and the last value (0.5) sets the alpha channel to 0.5, making the background 50% transparent. You can adjust the alpha value to control the level of transparency.",
          languageOne: "HTML",
          languageTwo: "CSS",
          languageThird: "React",
          Project: "Open Project",
          github: "Open Github",
          ProjectUrl: "https://www.google.com/search?q=hh&rlz=1C1KNTJ_enNG1077NG1077&oq=hh&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCTIxODdqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8",
          githubUrl: "https://wavang.com/",
        },
      ]
    
      const [showContent, setShowContent] = useState(Array(myPrpjectVideo.length).fill(false));
    
      const toggleContent = (index) => {
        const updatedShowContent = [...showContent];
        updatedShowContent[index] = !updatedShowContent[index];
        setShowContent(updatedShowContent);
      };
  return (
    <div className='all-project'>
         <Project/>
         <div className='video-section'>
            {myPrpjectVideo.map((vid, index)=>(
                  <div className='video-player' key={index} onClick={() => toggleContent(index)}>
                      <video src={vid.video} controls loop autoPlay autostart type="video/mp4"/>
                      <div className={showContent[index] ? "hello1" : 'hello2' }>
                          <h1>{vid.header}</h1>
                          <p>{vid.content}</p>
                          <div className='language-btn'>
                            <button>{vid.languageOne}</button>
                            <button>{vid.languageTwo}</button>
                            <button>{vid.languageThird}</button>
                          </div>
                          <div className='external-links'>
                            <div className='Visit-project'>
                              <a href={vid.ProjectUrl} rel="noreferrer" target='_blank'><button>{vid.Project}</button></a>
                            </div>
                            <div className='Visit-project'>
                              <a href={vid.githubUrl} rel="noreferrer" target='_blank'><button>{vid.github}</button></a>
                            </div>
                          </div>
                      </div>
                  </div>
              
            ))}
        </div>
    </div>
  )
}

export default HtmlCss