const express = require('express');

const projects = require('./projects-model.js');
const actions = require('../actions/actions-model.js');

const router = express.Router();

router.get('/', (request, response) => {
  projects
    .get()
    .then(projects => {
      response
        .status(200)
        .json(projects)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: `Error retrieving projects`
        })
    })
});

router.post('/', (request, response) => {
  const newProject = request.body;
  
  projects
    .insert(newProject)
    .then(project => {
      response
        .status(201)
        .json(project)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: `Error creating new project`
        })
    })
});

router.get('/:id', (request, response) => {
  const projectID = request.params.id;

  projects 
    .get(projectID)
    .then(project => {
      response
        .status(200)
        .json(project)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: `Error retrieving project`
        })
    })
});

router.put('/:id', (request, response) => {
  const projectID = request.params.id;
  const updatedInfo = request.body;
  
  projects
    .update(projectID, updatedInfo)
    .then(project => {
      response
        .status(201)
        .json(project)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: `Error updating project`
        })
    })
});

router.delete('/:id', (request, response) => {
  const projectID = request.params.id;
  const deletedProject = projects.get(projectID);

  projects
    .remove(projectID)
    .then(deletedCount => {
      response
        .status(200)
        .json({
          Deleted: deletedCount
        })
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: `Error deleting project`
        })
    })
});

router.get('/:projectID/actions', (request, response) => {
  const projectID = request.params.projectID;

  projects
    .getProjectActions(projectID)
    .then(actions => {
      response
        .status(200)
        .json(actions)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: 'Error retrieving actions for this project'
        })
    })
})

router.post('/:projectID/actions', (request,response) => {
  const newAction = {
    ...request.body,
    project_id: request.params.projectID
  };

  actions
    .insert(newAction)
    .then(action => {
      response
        .status(201)
        .json(action)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: 'Error creating action for this project'
        })
    })
})

module.exports = router;
