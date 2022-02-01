import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TopPageProjectList } from './TopPageProjectList';

export const TopPage = () => {

    const[isShown, setIsShown] = useState(false);

    const projects = useSelector(state => state.projectList);
    console.log('projects:', projects);

    const showSelectedProject = (pickedTitle) => {
        console.log('hover title', pickedTitle);
        const selectedProject = projects.find(project => project.title = pickedTitle)
        console.log('selected item name', selectedProject)
    } 
    

  return (
  <>
    <div className='top-con'>
        <div className="top-con-left ?">
            <div className="top-con-left-con ?">
                <img src='https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='webapp-1' />
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
        <div className="top-con-right ?">


            <div className='top-con-right-list '>
                {projects.map(project => {
                    return(
                        // <li key={project.id} onMouseEnter={showSelectedProject(project.id)}>{project.title}</li>
                        <TopPageProjectList key={project.id} project={project} onHover={showSelectedProject}/>

                    )
                })}
            </div>
        </div>


    </div>
  </>
    );
};
