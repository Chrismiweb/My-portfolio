import React, { useEffect, useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptLine } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandTailwind } from 'react-icons/tb';
import {BiLogoRedux} from 'react-icons/bi'

import './Skills.css';

function Skills() {
  const iconList = [
    {
      icon: <AiFillHtml5 />,
      language: 'HTML',
    },
    {
      icon: <IoLogoCss3 />,
      language: 'CSS',
    },
    {
      icon: <RiJavascriptLine />,
      language: 'JavaScript',
    },
    {
      icon: <GrReactjs />,
      language: 'React',
    },
    {
      icon: <TbBrandTailwind />,
      language: 'Tailwind',
    },
    {
      icon: <BiLogoRedux />,
      language: 'Redux',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === iconList.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(handleSlide, 2000); // Change the slide every 2 seconds
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="icon-slider">
      <h1>SKILLS</h1>
      <div className="slider-content">
            {iconList.map((item, index) => (
            <div
                key={index}
                className={`slide ${index === activeIndex ? 'active' : ''}`}
            >
                {item.icon}
                <p>{item.language}</p>
            </div>
            ))}
      </div>
    </div>
  );
}

export default Skills;
