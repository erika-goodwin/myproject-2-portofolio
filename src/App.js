import React, { useEffect } from 'react';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";

import './css/app.scss'
import { TopPage } from './components/TopPage';
import { About } from './components/About';
import ContactMe from './components/ContactMe';

const backgroundChanger = (location ) => {
    let backgroundPic 
    switch (location.pathname) {
      case '/':
        backgroundPic = 'app-con-background-home'
        console.log(backgroundPic)
        break;
      case '/about':
        backgroundPic = 'app-con-background-about'
        console.log(backgroundPic)
        break; 
      case '/contact':
        backgroundPic = 'app-con-background-contact'
        console.log(backgroundPic)
        break; 
      default:
        break;
    }
}

export default function App() {
  let location = useLocation();
  

  useEffect(()=>{
    let backgroundClass = backgroundChanger(location)
  },[location])

  // useEffect(()=>{
  //   let backgroundPic 
  //   switch (location.pathname) {
  //     case '/':
  //       backgroundPic = 'app-con-background-home'
  //       console.log(backgroundPic)
  //       break;
  //     case '/about':
  //       backgroundPic = 'app-con-background-about'
  //       console.log(backgroundPic)
  //       break; 
  //     case '/contact':
  //       backgroundPic = 'app-con-background-contact'
  //       console.log(backgroundPic)
  //       break; 
  //     default:
  //       break;
  //   }
  // },[location])

  return (
    <>
      <div className='app-con backgroundClass'>

        <Nav />
        <Routes>
          <Route path='/' element={<TopPage />}>
            {/* <Route path='/:id' element={<Modal />} /> */}
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>

      </div>
      
    </>
  );
}


