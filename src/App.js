import React from 'react';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

import './css/app.scss'
import { TopPage } from './components/TopPage';
import { About } from './components/About';
import ContactMe from './components/ContactMe';

export default function App() {
  return (
    <>
      <div className='app-con'>

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


