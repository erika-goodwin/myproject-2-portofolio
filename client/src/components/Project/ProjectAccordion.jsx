import React, { useEffect, useState } from "react";
function ProjectAccordion() {
  const [toggleActive, setToggleActive] = useState(false);

  const clickAccordion = () => {
    setToggleActive((pre) => !pre);
    console.log("toggle changed");
  };

  return (
    <>
      <div className="project-detail-right-accordion-indi">
        <button className="accordion" onClick={clickAccordion}>
          Section2
        </button>
        {toggleActive && (
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectAccordion;
