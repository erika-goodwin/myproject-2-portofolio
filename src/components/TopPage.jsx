import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TopPageLeft } from './TopPageLeft';

export const TopPage = () => {

    const[isShown, setIsShown] = useState(false);

    const projects = useSelector(state => state.projectList);
    // const dispatch = useDispatch();
    console.log('projects:', projects);

    const showSelectedProject = (pickedTitle) => {
        console.log('hover title', pickedTitle);
        const selectedProject = projects.find(project => project.title = pickedTitle)
        console.log('selected item name', selectedProject)
    }
    

  return (
  <>
    <div className='top-con'>
        <div className="top-con-left">
            <div className="top-con-left-con ?">
                      containor  
            </div>
            <div className="top-con-left-disc" >
                        
                        <div className='top-con-left-disc-con'>
                        discription 1 here
                        </div>
                        <div className='top-con-left-disc-con'>
                        discription 2 here
                        </div>
            </div>

              {/* {isShown && (
                  <div className="top-con-right-con ?">
                      
                    </div>
              )} */}

        {/* {navigationMenu.map(item => (
                //   <li key={item.name}><a href={item.url}>{item.name}</a></li>
                <Link to={item.url} key={item.name} className='nav-con-2-ul-link'>{item.name}</Link>
              ))} */}
        </div>
        <div className="top-con-right ">


            <div className='top-con-right-list '>
                {projects.map(project => {
                    return(
                        // <li key={project.id} onMouseEnter={showSelectedProject(project.id)}>{project.title}</li>
                        <TopPageLeft key={project.id} project={project} onHover={showSelectedProject}/>

                    )
                })}
            </div>
        </div>


    </div>
  </>
    );
};
