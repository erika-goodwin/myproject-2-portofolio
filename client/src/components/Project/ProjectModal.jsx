import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { useRef } from "react/cjs/react.production.min";

const ProjectModal = ({ project, setShowModal }) => {
  const tag = project.LangTag;

  // const ref = useRef();
  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener("mousedown", handleClick);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  // const handleClick = e => {
  //   if (ref.current.contains(e.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   setShowModal((pre) => !pre);

  // };

  return (
    // <div className="project-con-left-comp-modal " ref={ref}>
    <div className="project-con-left-comp-modal ">
      <h2>{project.title}</h2>
      <h4>{project.summary}</h4>
      <div className="project-con-left-comp-modal-tag ">
        <ul>
          {tag.map((tag) => (
            <li>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-con-left-comp-modal-deslink-con">
        <p className="project-con-left-comp-modal-deslink-con-description ">
          {project.description}
        </p>
        <div className="project-con-left-comp-modal-deslink-con-link ">
          <ul>
            <li>
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noreferrer"
                alt="homepage"
              >
                <ImEarth className="sns-icon earth" />
              </a>
            </li>
            <li>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                alt="GitHub"
              >
                <BsGithub className="sns-icon github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
