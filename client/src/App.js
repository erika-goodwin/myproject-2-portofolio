import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/app.scss";
import { TopPage } from "./components/TopPage";
import { ProjectPage } from "./components/ProjectPage";
import { About } from "./components/About";
import ContactMe from "./components/ContactMe";

const backgroundChanger = (location) => {
  let backgroundPic;
  switch (location.pathname) {
    case "/":
      backgroundPic = "app-con-background-top";
      break;
    case "/project":
      backgroundPic = "app-con-background-project";
      break;
    case "/about":
      backgroundPic = "app-con-background-about";
      break;
    case "/contact":
      backgroundPic = "app-con-background-contact";
      break;
    default:
      break;
  }
  return backgroundPic;
};

export default function App() {
  const [data, setData] = useState(null);

  const [backgroundClass, setBackgroundClass] = useState();
  let location = useLocation();

  useEffect(() => {
    fetch("/api")
    // fetch(process.env.REACT_APP_API_ENDPOINT + "/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    console.log("data from backend:", data);
  }, []);

  useEffect(() => {
    setBackgroundClass(backgroundChanger(location));
  }, [location]);

  return (
    <>
      <div className={`app-con ${backgroundClass}`}>
        <Nav />
        <Routes>
          <Route path="/" element={<TopPage />}>
            {/* <Route path='/:id' element={<Modal />} /> */}
          </Route>
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}
