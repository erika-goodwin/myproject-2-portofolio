import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProjectPageProjectList = ({
  project,
  onLeave,
  onHover,
  // onClick,
}) => {
  const [selectedDetail, setSelectedDetail] = useState([]);

  const onClickHandler = () => {
    console.log("project link onclick  ", project);
    setSelectedDetail(project);
  };

  return (
    <div
      className="project-con-right-list-each"
      onMouseEnter={() => onHover(project._id)}
      onMouseLeave={() => onLeave()}
      // onClick={() => onClick(project._id)}
    >
      <Link to={`/project/${project._id}`} onClick={onClickHandler}>
        {project.title}
      </Link>
      <hr />
    </div>
  );
};
