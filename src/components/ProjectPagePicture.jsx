import React, { useEffect, useState } from 'react';

export const ProjectPagePicture = ({info}) => {
    console.log('selected info in picture conp:', info)

    const[tagStrings, setTagStrings] = useState('')

    useEffect(()=>{
      // setTagStrings(info.LangTag.join(', '))
      setTagStrings(info.LangTag)
      console.log('info in pic conpo changed')
    },[info])

  return (
  <div className='project-con-left-comp'>
    
        <img src='https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='webapp-1' />
  
    <div className="project-con-left-comp-disc" >
                <div className='project-con-left-comp-disc-con'>
                {/* <p>{info.LangTag}</p> */}
                <p>{tagStrings}</p>
                </div>
                <div className='project-con-left-comp-disc-con'>
                <p>{info.summary}</p>
                </div>
    </div>
  </div>
    );
};
