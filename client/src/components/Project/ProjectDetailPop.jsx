import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import ProjectImageGallery from "./ProjectImageGallery";

function ProjectDetailPop() {
  let { detailId } = useParams();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((res) => res.json())
      .then((res) => {
        console.log("detail res", res);
        const selectedProject = res.find((project) => (project._id = detailId));
        console.log("selectedProject for detail", selectedProject);
        setProjectData(selectedProject);
      })
      // .then((res) => dispatch(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <div className="project-detail ">
        <div className="project-detail-left ">
          <ProjectImageGallery imageData={projectData.image} />
        </div>
        <div className="project-detail-right ">
          <h1>{projectData.title}</h1>
          <h4>{projectData.summary}</h4>

          <div className="project-detail-right-tag ">
            <ul>
              {projectData?.LangTag?.map((tag) => (
                <li>
                  <p>{tag}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>{projectData.description}</p>

          <div className="project-detail-right-accordion">
            {projectData?.bulletPoint?.map((point) => (
              <ProjectAccordion
                bulletPoint={point}
                key={projectData.bulletPoint._id}
              />
            ))}
            {/* <ProjectAccordion /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPop;
