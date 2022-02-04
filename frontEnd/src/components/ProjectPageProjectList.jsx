import React from 'react';

export const ProjectPageProjectList = ({project, onHover}) => {
  return (
    <div className='project-con-right-list-each'  onMouseEnter={()=> onHover(project.title)}>
        <a href='#'>{project.title}</a>

        <hr />
    </div>
    );
};
