import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ProjectPagePicture } from './ProjectPagePicture';
import { ProjectPageProjectList } from './ProjectPageProjectList';

export const ProjectPage = () => {

    const projects = useSelector(state => state.projectList);
    const defaultProject = projects[0]
    const [selectedInfo, setSelectedInfo] = useState([defaultProject])
    // console.log('projects:', projects);

    const showSelectedProject = (pickedTitle) => {
        console.log('hover title', pickedTitle);
        const selectedProject = projects.find(project => project.title = pickedTitle)
        setSelectedInfo(selectedProject)
        console.log('setSelectedInfo:', selectedInfo)

    }

    useEffect(()=>{
        console.log('changed selected title')
    },[selectedInfo])
    

  return (
  <>
    <div className='project-con'>
        <div className="project-con-left">
            <ProjectPagePicture info={selectedInfo}/>
        </div>
        <div className="project-con-right">


            <div className='project-con-right-list '>
                {projects.map(project => {
                    return(
                        // <li key={project.id} onMouseEnter={showSelectedProject(project.id)}>{project.title}</li>
                        <ProjectPageProjectList key={project.id} project={project} onHover={showSelectedProject}/>
                    )
                })}
            </div>
        </div>
    </div>
  </>
    );
};
