import React from 'react';

export const TopPageProjectList = ({project, onHover}) => {
  return (
    <div className='top-con-right-list-each' onMouseEnter={onHover(project.title)}>
        <a href='#' >{project.title}</a>
        <hr />
    </div>
    );
};
