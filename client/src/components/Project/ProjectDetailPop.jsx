import React from "react";
import { useParams } from "react-router-dom";
import ProjectAccordion from "./ProjectAccordion";
import ProjectImageGallery from "./ProjectImageGallery";

function ProjectDetailPop() {
  let { detailId } = useParams();


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
              <li>
                <p>tag</p>
              </li>
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
            <ProjectAccordion />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPop;
