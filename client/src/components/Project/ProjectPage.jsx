import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProjectDetailPop from "./ProjectDetailPop";

import { ProjectPagePicture } from "./ProjectPagePicture";
import { ProjectPageProjectList } from "./ProjectPageProjectList";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);

  // const defaultProject = projectData[0];
  // const [selectedInfo, setSelectedInfo] = useState([defaultProject]);
  const [selectedInfo, setSelectedInfo] = useState([]);

  const [showSummary, setShowSummary] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSelectedProject = (pickedTitle) => {
    setShowModal((pre) => !pre);
    const selectedProject = projectData.find(
      (project) => (project.title = pickedTitle)
    );
    setSelectedInfo(selectedProject);
  };

  const leaveSelectedProject = () => {
    setShowModal((pre) => !pre);
  };

  // const handleOnClick = (pickedTitle) => {
  //   // setShowModal((pre) => !pre);
  //   const selectedProject = projectData.find(
  //     (project) => (project.title = pickedTitle)
  //   );
  // };

  // useEffect(() => {
  //   console.log("changed selected summary");
  // }, [selectedInfo]);

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((res) => res.json())
      .then((res) => setProjectData(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <div className="project-con-left">
        <ProjectPagePicture
          info={selectedInfo}
          showSummary={showSummary}
          showModal={showModal}
        />
      </div>
      <div className="project-con-right">
        <div className="project-con-right-list">
          {projectData.map((project) => {
            return (
              <ProjectPageProjectList
                key={project._id}
                project={project}
                onHover={showSelectedProject}
                onLeave={leaveSelectedProject}
                // onClick={handleOnClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
