import React, { useEffect, useState } from "react";

import { ProjectPagePicture } from "./ProjectPagePicture";
import { ProjectPageProjectList } from "./ProjectPageProjectList";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  console.log("projectData", projectData);
  const [selectedInfo, setSelectedInfo] = useState([projectData[0]]);
  console.log("selectedInfo", selectedInfo);

  const [showSummary, setShowSummary] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showSelectedProject = (pickedId) => {
    setShowModal((pre) => !pre);
    const selectedProject = projectData.find(
      (project) => (project._id = pickedId)
    );
    console.log(selectedProject);
    setSelectedInfo(() => selectedProject);
  };

  const leaveSelectedProject = () => {
    setShowModal((pre) => !pre);
  };

  // const handleOnClick = () => {};

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((res) => res.json())
      .then((res) => setProjectData(res))
      // .then((res) => dispatch(res))
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
