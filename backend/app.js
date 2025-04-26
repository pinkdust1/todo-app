// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// В-памяти хранилище для задач
let tasks = [];
let nextId = 1;

// GET /tasks - получение всех задач
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - создание новой задачи
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTask = {
    id: nextId++,
    title,
    completed: false
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PATCH /tasks/:id - обновление статуса задачи
app.patch('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { completed } = req.body;
  
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    completed: completed !== undefined ? completed : tasks[taskIndex].completed
  };
  
  res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id - удаление задачи
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks = tasks.filter(task => task.id !== taskId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Для запуска: node app.js
