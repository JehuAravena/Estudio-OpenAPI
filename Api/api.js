const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const openApiDefinition = require('./openapi.json');

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDefinition));

let tasks = ['Tarea 1', 'Tarea 2'];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});