import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './component/LandingPage';
// import Project from './Project/Project';
import AllProject from './Project/AllProject';
import AboutPage from './AboutMe/AboutPage';
import HtmlCss from './Project/HtmlCss';
import Test from './component/Test';
import Contact from './Contact/Contact';
import Snow from './Contact/Snow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Allproject' element={<AllProject/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
          <Route path='/HtmlCss' element={<HtmlCss/>}/>
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Snow' element={<Snow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
