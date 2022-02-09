const express = require("express");
const router = express.Router();

let Project = require("../models/project.model");

router.get("/", (req, res) => {
  // res.send("hello world");
  //   res.json({ message: "Hello from server!" });
  console.log("get get get");
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error: ", err));
});

router.post("/", (req, res) => {
  console.log("post post post...");

  const title = req.body.title;
  const LangTag = req.body.LangTag;
  const deployedUrl = req.body.deployedUrl;
  const githubUrl = req.body.githubUrl;
  const summary = req.body.summary;
  const description = req.body.description;

  const newProject = new Project({
    title,
    LangTag,
    deployedUrl,
    githubUrl,
    summary,
    description,
    LangTag,
  });
  newProject
    .save()
    .then((project) => {
      console.log(project);
    })
    .catch((err) => res.status(400).json("Error: ", err));

  res.redirect("/");
});

router.get("/:id", (req, res) => {
  const pickedProjectId = req.params.id;
  console.log("get id get id get id:", pickedProjectId);
  Project.findById(pickedProjectId).then((project) => {
    console.log("/picked project: ", project);

    res.render("ProjectPage", {
      pageTitle: "project",
      project: project,
    });
  });
});

module.exports = router;
