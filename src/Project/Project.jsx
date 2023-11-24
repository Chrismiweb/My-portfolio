import React from 'react'
import './Project.css';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
import Snow from '../Contact/Snow';

function Project() {
  return (
    <div className='project'>
       <Navbar/>
       <Snow/>
       
       <div className='project-section'>
            <h1>PROJECTS.</h1>
            <div className='project-skills'>
                <Link to={'/Allproject'}><button>All</button></Link>
                <Link to={'/HtmlCss'}><button>Html/Css</button></Link>
                <a href=""><button>Html/Css/Javascript</button></a>
                <a href=""><button>React</button></a>
                <a href=""><button>Wordpress</button></a>
                <a href=""><button>APIs</button></a>
                <a href=""><button>Redux</button></a>

            </div>
            
       </div>
    </div>
  )
}

export default Project