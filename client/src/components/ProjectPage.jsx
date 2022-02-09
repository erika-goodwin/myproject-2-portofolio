import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProjectPagePicture } from "./ProjectPagePicture";
import { ProjectPageProjectList } from "./ProjectPageProjectList";

export const ProjectPage = () => {
  // const projects = useSelector((state) => state.projectList);
  // const defaultProject = projects[0];
  // console.log('projects:', projects);
  const [projectData, setProjectData] = useState([]);
  const defaultProject = projectData[0];
  console.log('defaultProject', defaultProject)
  const [selectedInfo, setSelectedInfo] = useState([defaultProject]);
  console.log('default stet in selected info', selectedInfo)


  const showSelectedProject = (pickedTitle) => {
    console.log("hover title", pickedTitle);
    const selectedProject = projectData.find(
      (project) => (project.title = pickedTitle)
    );
    setSelectedInfo(selectedProject);
    console.log("setSelectedInfo:", selectedInfo);
  };

  useEffect(() => {
    console.log("changed selected title");
  }, [selectedInfo]);

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((res) => res.json())
      .then((res) => setProjectData(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <div className="project-con">
        <div className="project-con-left">
          <ProjectPagePicture info={selectedInfo} />
        </div>
        <div className="project-con-right">
          <div className="project-con-right-list">
            {projectData.map((project) => {
              return (
                // <li key={project.id} onMouseEnter={showSelectedProject(project.id)}>{project.title}</li>
                <ProjectPageProjectList
                  key={project._id}
                  project={project}
                  onHover={showSelectedProject}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
