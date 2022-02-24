import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const navigationMenu = [
  { name: "Projects", url: "/project", current: true },
  { name: "About", url: "/about", current: true },
  { name: "Contact me", url: "/contact", current: true },
];

const settingChanger = (location) => {
  let backgroundCol;
  let navHoverCol;
  switch (location.pathname) {
    case "/":
      backgroundCol = "nav-con-background-top";
      navHoverCol = "nav-hover-top";
      break;
    case "/project":
      backgroundCol = "nav-con-background-project";
      navHoverCol = "nav-hover-project";
      break;
    case "/project/:detailId":
      backgroundCol = "nav-con-background-project";
      navHoverCol = "nav-hover-project";
      break;
    case "/about":
      backgroundCol = "nav-con-background-about";
      navHoverCol = "nav-hover-about";
      break;
    case "/contact":
      backgroundCol = "nav-con-background-contact";
      navHoverCol = "nav-hover-contact";
      break;
    default:
      break;
  }
  return [backgroundCol, navHoverCol];
};

function Nav() {
  const [backgroundClass, setBackgroundClass] = useState();
  const [navHoverClass, setNavHoverClass] = useState();
  let location = useLocation();

  useEffect(() => {
    setBackgroundClass(settingChanger(location)[0]);
    setNavHoverClass(settingChanger(location)[1]);
  }, [location]);

  return (
    <nav className={`nav-con ${backgroundClass}`}>
      <div className="nav-con-1">
        <a href="/" className={navHoverClass}>
          <h3>Erika Hashizume</h3>
        </a>
      </div>
      <div className="nav-con-2">
        <ul className="nav-con-2-ul">
          {navigationMenu.map((item) => (
            //   <li key={item.name}><a href={item.url}>{item.name}</a></li>
            <Link
              to={item.url}
              key={item.name}
              className={`nav-con-2-ul-link ${navHoverClass}`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
