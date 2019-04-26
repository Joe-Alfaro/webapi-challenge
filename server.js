const express = require('express');

const server = express();

const projectsRouter = require('./projects/projects-router.js');

server.use(express.json());

server.use('/api/projects', projectsRouter)

server.get('/', (request, response) => {
  response.send(`
    <h2>Lambda Projects and Actions API</h2>
  `);
});

module.exports = server;
