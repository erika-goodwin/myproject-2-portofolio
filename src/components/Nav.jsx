import React from 'react';
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const navigationMenu = [
    {name: 'Projects', url: '/', current: true},
    {name: 'About', url: '/about', current: true},
    {name: 'Contact me', url: '/contact', current: true},
]

function Nav() {


  return (
  <nav className='nav-con'>
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
