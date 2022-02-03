import React, { useCallback, useEffect, useState } from 'react';


export const TopPage = () => {

    

  return (
  <>
    <div className='top-con'>
        <div className="top-con-left">
          <div className="top-con-left-location">
           <ion-icon name="location-outline"></ion-icon>
            <h5 className=''>Vancouver, BC</h5>
          </div>
          <div className='top-con-left-me'>
              <h1>Hi, I'm Erika</h1>
              <h5>Full-stack web developer with experience in HTML/CSS and Javascript, currently in the process of completing my diploma.<br /><br /> My previous experience as an Airline engineer allowed me to gain troubleshooting and problem-solving skills to identify defects and improve reliability. I am motivated to continue learning and applying these skills working as part of a full-stack web developer team.</h5>
          </div>
          <div className='top-con-left-btn'>
            <button className='btn btn-top'>Project</button>
            <button className='btn btn-top'>Project</button>
          </div>
        </div>

        <div className="top-con-right ?">


            
               <div className='top-con-right-pic'>picture</div>
       
        </div>
    </div>
  </>
    );
};
