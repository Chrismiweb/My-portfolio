import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './component/LandingPage';
// import Project from './Project/Project';
import AllProject from './Project/AllProject';
import AboutPage from './AboutMe/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Allproject' element={<AllProject/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
