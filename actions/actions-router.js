const express = require('express');

const actions = require('./actions-model.js');

const router = express.Router();

router.get('/', (request, respone) => {
  actions
    .get()
    .then()
    .catch()
});
router.post('/', (request, respone) => {
  const newAction = request.body;
  
  actions
    .insert(newAction)
    .then()
    .catch()
});
router.get('/:id', (request, respone) => {
  const actionID = request.params.id;

  actions
    .get(request.params.id)
    .then()
    .catch()
});
router.put('/:id', (request, respone) => {
  const actionID = request.params.id;
  const updatedInfo = request.body;
  
  actions
    .update(actionID, updatedInfo)
    .then()
    .catch()
});
router.delete('/:id', (request, respone) => {
  const actionID = request.params.id;

  actions
    .remove(actionID)
    .then()
    .catch()
});
