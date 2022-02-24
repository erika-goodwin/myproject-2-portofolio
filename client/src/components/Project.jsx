import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ProjectPage } from "./ProjectPage";

export const Project = () => {
  return (
    <>
      <div className="project-con">
        {/* <ProjectPage /> */}
        <Outlet />
      </div>
    </>
  );
};
