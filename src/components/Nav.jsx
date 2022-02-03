import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const navigationMenu = [
    {name: 'Projects', url: '/project', current: true},
    {name: 'About', url: '/about', current: true},
    {name: 'Contact me', url: '/contact', current: true},
]

const backgroundChanger = (location ) => {
    let backgroundCol 
    switch (location.pathname) {
      case '/':
        backgroundCol = 'nav-con-background-main'
        break;
      case '/project':
        backgroundCol = 'nav-con-background-third'
        break;
      case '/about':
        backgroundCol = 'app-con-background-second'
        break; 
      case '/contact':
        backgroundCol = 'app-con-background-backd'
        break; 
      default:
        break;
    }
    return backgroundCol
}

function Nav() {

    const [backgroundClass, setBackgroundClass] = useState()
     let location = useLocation();

    useEffect(()=>{
        setBackgroundClass(backgroundChanger(location))
    },[location])

  return (
  <nav className={`nav-con ${backgroundClass}`}>
      <div className='nav-con-1'>
          <a href="/" ><h3>Erika Hashizume</h3></a>
          
      </div>
      <div className='nav-con-2'>
          <ul className='nav-con-2-ul'>
              {navigationMenu.map(item => (
                //   <li key={item.name}><a href={item.url}>{item.name}</a></li>
                <Link to={item.url} key={item.name} className='nav-con-2-ul-link'>{item.name}</Link>
              ))}
          </ul>
      </div>

  </nav>
  
    )
}

export default Nav;
