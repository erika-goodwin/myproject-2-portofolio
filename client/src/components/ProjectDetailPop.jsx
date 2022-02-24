import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectImageGallery from "./ProjectImageGallery";

function ProjectDetailPop( project ) {
  let { detailId } = useParams();
  console.log('project data in Deatil pop', project)

  const [toggleActive, setToggleActive] = useState(false);

  const clickAccordion = () => {
    setToggleActive((pre) => !pre);
    console.log("toggle changed");
  };

  return (
    <>
      <div className="project-detail ">
        <div className="project-detail-left ">
          <ProjectImageGallery />
        </div>
        <div className="project-detail-right ">
          <h1>Title</h1>
          <h4>summary summary symmary</h4>

          <div className="project-detail-right-tag ">
            <ul>
              {/* {tag.map((tag) => ( */}
              <li>
                <p>tag</p>
              </li>
              {/* ))} */}
            </ul>
          </div>

          <p>
            detail discription Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Harum pariatur commodi atque rerum ex error odio
            accusamus laboriosam esse excepturi quaerat delectus, quam ratione
            iste possimus voluptatem. Est, nihil velit.
          </p>

          <div className="project-detail-right-accordion">
            <button class="accordion" onClick={clickAccordion}>
              Section 1
            </button>
            {toggleActive && (
              <div class="panel">
                <p>Lorem ipsum...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPop;
