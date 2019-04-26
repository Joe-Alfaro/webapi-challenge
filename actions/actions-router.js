const express = require('express');

const actions = require('./actions-model.js');

const router = express.Router();

router.get('/:id', (request, response) => {
  const actionID = request.params.id;

  actions
    .get(request.params.id)
    .then(action => {
      response
        .status(200)
        .json(action)
    })
    .catch(error => {
      response
        .status(500)
        .json({
          errorMessage: 'Error retrieving action'
        })
    })
});
router.put('/:id', (request, response) => {
  const actionID = request.params.id;
  const updatedInfo = request.body;
  
  actions
    .update(actionID, updatedInfo)
    .then(action => {
      response
        .status(201)
        .json(action)
    })
    .catch(error => {
      response
        .status(500)
        .json({
            errorMessage: 'Error updating action'
        })
    })
});
router.delete('/:id', (request, response) => {
  const actionID = request.params.id;

  actions
    .remove(actionID)
    .then(deletedCount => {
      response
        .status(200)
        .json({
          deleted: deletedCount
        })
    })
    .catch(error => {
      response
        .status(500)
        .json({
            errorMessage: 'Error deleting action'
        })
    })
});

module.exports = router;
