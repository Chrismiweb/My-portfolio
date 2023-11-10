import React from 'react'
import './Project.css';
import Navbar from '../component/Navbar';

function Project() {
  return (
    <div className='project'>
       <Navbar/>
       <div className='project-section'>
            <h1>PROJECTS.</h1>
            <div className='project-skills'>
                <a href=""><button>All</button></a>
                <a href=""><button>Html/Css</button></a>
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